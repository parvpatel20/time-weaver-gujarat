import fs from 'fs';
import path from 'path';

const root = path.resolve(process.cwd(), 'src', 'components');

/**
 * Remove common TypeScript syntax from React component files to make them valid JS/JSX.
 */
function transformTsToJs(source) {
  let s = source;
  // 1) Remove React.forwardRef generics: React.forwardRef<...>( -> React.forwardRef(
  s = s.replace(/React\.forwardRef<[^>]+>\s*\(/g, 'React.forwardRef(');
  s = s.replace(/forwardRef<[^>]+>\s*\(/g, 'forwardRef(');

  // 1a) Remove createContext generics
  s = s.replace(/createContext<[^>]+>\s*\(/g, 'createContext(');

  // 2) Remove import type specifiers: { type X } or \, type X
  s = s.replace(/\{\s*type\s+([A-Za-z0-9_,\s<>]+)\s*\}/g, (m, p1) => `{ ${p1.replace(/\s+/g, ' ').trim()} }`);
  s = s.replace(/,\s*type\s+[A-Za-z0-9_,\s<>]+/g, '');

  // 3) Drop standalone type/interface declarations
  s = s.replace(/^\s*type\s+[\s\S]*?;\s*$/gm, '');
  s = s.replace(/^\s*interface\s+[\s\S]*?\{[\s\S]*?\}\s*$/gm, '');

  // 4) Remove parameter/variable type annotations inside parentheses
  // Examples: (props: SomeType) -> (props)
  s = s.replace(/(\(|,\s*)([A-Za-z_$][A-Za-z0-9_$]*)\s*:\s*[^,\)]+(?=[,\)])/g, '$1$2');
  // Destructured param: ({...}: Something) -> ({...})
  s = s.replace(/\}\s*:\s*[^)]+\)/g, '})');

  // 5) Remove angle-bracket type arguments in jsx-less contexts like React.ElementRef<...>
  s = s.replace(/React\.[A-Za-z]+<[^>]+>/g, 'any');

  // 6) Remove "as Something" assertions (simple cases)
  s = s.replace(/\s+as\s+[A-Za-z0-9_\[\]"\.'\\]+/g, '');

  // 7) Remove generic type args in cva VariantProps reference usage in unions
  s = s.replace(/\bVariantProps<[^>]+>/g, 'any');

  // 7a) Remove specific type-only identifiers from imports
  s = s.replace(/import\s*\{([^}]+)\}\s*from\s*["']class-variance-authority["'];?/g, (m, inner) => {
    const names = inner.split(',').map(x => x.trim()).filter(x => x && !/^type\s/.test(x));
    const filtered = names.filter(n => !/^VariantProps\b/.test(n));
    if (filtered.length === 0) return '';
    return `import { ${filtered.join(', ')} } from "class-variance-authority";`;
  });

  s = s.replace(/import\s*\{\s*type\s+DialogProps\s*\}\s*from\s*["']@radix-ui\/react-dialog["'];?/g, '');

  // 8) Normalize multiple blank lines
  s = s.replace(/\n{3,}/g, '\n\n');

  return s;
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      walk(p);
    } else if (e.isFile() && (p.endsWith('.tsx') || p.endsWith('.jsx'))) {
      const src = fs.readFileSync(p, 'utf8');
      const out = transformTsToJs(src);
      if (out !== src) {
        fs.writeFileSync(p, out, 'utf8');
      }
    }
  }
}

walk(root);

console.log('Transformed TypeScript syntax to JS in src/components');


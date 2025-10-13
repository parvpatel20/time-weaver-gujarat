import { useTheme } from "next-themes";
import { Toaster as SonnerToaster, toast } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  // Provide sensible default class names for Sonner's parts
  const description = "text-sm text-muted-foreground";
  const actionButton = "ml-2 px-2 py-1 rounded-md text-sm bg-primary text-primary-foreground";
  const cancelButton = "ml-2 px-2 py-1 rounded-md text-sm text-muted-foreground";

  return (
    <SonnerToaster
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description,
          actionButton,
          cancelButton,
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };

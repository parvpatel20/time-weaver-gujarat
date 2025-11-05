import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(undefined);

// Force dark-only theme. This provider ensures the site always uses the
// dark variables and prevents toggling to light. toggleTheme is a noop so
// components calling it won't break.
export const ThemeProvider = ({ children }) => {
  const theme = 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    // remove any light class and enforce dark
    root.classList.remove('light');
    root.classList.add('dark');
    try {
      localStorage.setItem('theme', 'dark');
    } catch (e) {
      // ignore (e.g., SSR or storage disabled)
    }
  }, []);

  const toggleTheme = () => {
    // noop - dark only
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

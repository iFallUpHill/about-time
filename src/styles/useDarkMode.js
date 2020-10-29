import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);
  const systemDarkMode = window?.matchMedia('(prefers-color-scheme: dark)')?.matches;

  const toggleTheme = (variant = 'light') => {
    window.localStorage.setItem('theme', variant);

    if ((systemDarkMode && variant === 'system') || variant === 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    toggleTheme(localTheme);

    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};

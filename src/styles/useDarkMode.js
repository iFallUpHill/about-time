import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('system');
  const [componentMounted, setComponentMounted] = useState(false);
  const systemDarkMode = window?.matchMedia('(prefers-color-scheme: dark)')?.matches;

  const toggleTheme = (variant = 'system') => {
    window.localStorage.setItem('theme', variant);

    if ((systemDarkMode && variant === 'system') || variant === 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    let localTheme = window.localStorage.getItem('theme') || 'system';
    toggleTheme(localTheme);
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};

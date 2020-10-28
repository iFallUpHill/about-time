import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);
  const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const setMode = (mode, respectSystemTheme) => {
    window.localStorage.setItem('theme', mode);
    window.localStorage.setItem('respect-system-theme', respectSystemTheme);
    setTheme(mode);
  };

  const toggleTheme = (variant = 'light') => {
    if (variant === 'light') {
      setMode('light', false);
    } else if (variant === 'dark') {
      setMode('dark', false);
    } else {
      setMode(systemDarkMode ? 'dark' : 'light', true)
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    const respectSystemTheme = JSON.parse(window.localStorage.getItem('respect-system-theme'));

    if (respectSystemTheme) {
      if (systemDarkMode) setMode('dark', true);
      else setMode('light', true);
    } else if (localTheme) {
      setTheme(localTheme, false);
    } else {
      setMode('light', false);
    }

    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};

import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
type Theme = 'light' | 'dark';
export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    // Check if user has a system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Set theme based on saved preference or system preference
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);
  useEffect(() => {
    if (!isMounted) return;
    // Update document with the current theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme, isMounted]);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  if (!isMounted) return null;
  return <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200" aria-label={theme === 'light' ? 'تفعيل الوضع الداكن' : 'تفعيل الوضع الفاتح'}>
      {theme === 'light' ? <MoonIcon className="h-5 w-5 text-slate-700" /> : <SunIcon className="h-5 w-5 text-amber-300" />}
    </button>;
};
import { createContext } from 'react';

export const ThemeContext = createContext({
  isDarkMode: true,
  toggleTheme: () => {}
});

export const LanguageContext = createContext({
  language: 'tr',
  setLanguage: (lang: string) => {},
  t: (key: string) => key
});
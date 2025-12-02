'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { dictionary, Locale } from './dictionaries';

type LanguageContextType = {
  locale: Locale;
  toggleLocale: () => void;
  t: typeof dictionary['en'];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'zh')) {
      setLocale(savedLocale);
    }
  }, []);

  const toggleLocale = () => {
    setLocale((prev) => {
      const next = prev === 'en' ? 'zh' : 'en';
      localStorage.setItem('locale', next);
      return next;
    });
  };

  const t = dictionary[locale];

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}


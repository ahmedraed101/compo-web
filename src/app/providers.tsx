'use client';

import { NextUIProvider } from '@nextui-org/react';
import React, { useState, createContext, useContext, useMemo } from 'react';

type Theme = 'dark' | 'light';

type ThemeProvider = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeProvider>({
  theme: 'light',
  setTheme: () => {},
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <NextUIProvider>
      <ThemeContext.Provider value={value}>
        <main className={`${theme} text-foreground bg-background`}>
          {children}
        </main>
      </ThemeContext.Provider>
    </NextUIProvider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}

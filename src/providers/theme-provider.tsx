'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system" // لو عايز الديفولت يكون حسب نظام المستخدم
      enableSystem={true} // لو عايز تعتمد على إعداد النظام حطها true
    >
      {children}
    </NextThemesProvider>
  );
}

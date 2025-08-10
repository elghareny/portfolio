'use client';

import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import SwitchButton from '@/components/shared/ui/SwitchButton';
import { Moon, Sun } from 'lucide-react';

export default function ToggleButtons() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const locale = useLocale();
  const [isArabic, setIsArabic] = useState(locale === 'ar');
  // const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const nextLocale = isArabic ? 'en' : 'ar';
    setIsArabic(!isArabic);

    router.replace(`/${nextLocale}`, { scroll: false });
  };

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <SwitchButton isDefault={resolvedTheme === 'dark'} toggle={toggleDarkMode}>
        {resolvedTheme === 'dark' ? (
          <Moon size={22} className="text-blue-400" />
        ) : (
          <Sun size={22} className="text-yellow-500" />
        )}
      </SwitchButton>
      {/* <SwitchButton isDefault={isArabic} toggle={toggleLanguage}>
        <span className="font-semibold text-primary text-sm">{isArabic ? 'AR' : 'EN'}</span>
      </SwitchButton> */}
    </>
  );
}

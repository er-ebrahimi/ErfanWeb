'use client';

import { IconChevronDown, IconLanguage } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { useSlugContext } from '@/app/context/SlugContext';
import { i18n } from '@/i18n.config';
import { iranSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

// Language labels for display
const languageLabels: Record<string, { label: string; flag: string }> = {
  en: { label: 'English', flag: '🇺🇸' },
  fr: { label: 'Français', flag: '🇫🇷' },
  fa: { label: 'فارسی', flag: '🇮🇷' },
};

export function LanguageSelector({ currentLocale }: { currentLocale: string }) {
  const { state } = useSlugContext();
  const { localizedSlugs } = state;
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const segments = pathname?.split('/') || [];

  // Always use locales from i18n config for consistency
  const availableLocales = i18n.locales;

  // Generate localized path for each locale
  const generateLocalizedPath = (locale: string): string => {
    if (!pathname) return `/${locale}`; // Default to root path for the locale

    // Handle homepage (e.g., "/en" -> "/fr")
    if (segments.length <= 2) {
      return `/${locale}`;
    }

    // Handle dynamic paths (e.g., "/en/blog/[slug]")
    if (localizedSlugs[locale]) {
      segments[1] = locale; // Replace the locale
      segments[segments.length - 1] = localizedSlugs[locale]; // Replace slug if available
      return segments.join('/');
    }

    // Fallback to replace only the locale
    segments[1] = locale;
    return segments.join('/');
  };

  const currentLanguage = languageLabels[currentLocale] || {
    label: currentLocale.toUpperCase(),
    flag: '🌐',
  };

  return (
    <div className="relative">
      {/* Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:bg-card transition-colors duration-200"
      >
        <IconLanguage className="h-4 w-4" />
        <span className="text-sm font-medium">{currentLanguage.flag}</span>
        <span
          className={cn(
            'text-sm',
            currentLocale === 'fa' ? iranSans.className : ''
          )}
        >
          {currentLanguage.label}
        </span>
        <IconChevronDown
          className={cn(
            'h-4 w-4 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {/* Language Dropdown */}
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-48 bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-lg z-50 bg-muted dark:bg-primary/20">
          <div className="py-2">
            {availableLocales.map((locale) => {
              const language = languageLabels[locale] || {
                label: locale.toUpperCase(),
                flag: '🌐',
              };
              const isActive = locale === currentLocale;

              return (
                <Link
                  key={locale}
                  href={generateLocalizedPath(locale)}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent/50 transition-colors duration-150',
                    isActive && 'bg-accent/30 text-accent-foreground'
                  )}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span
                    className={cn(
                      'flex-1',
                      locale === 'fa' ? iranSans.className : ''
                    )}
                  >
                    {language.label}
                  </span>
                  {isActive && (
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}

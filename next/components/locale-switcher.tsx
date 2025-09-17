'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { useSlugContext } from '@/app/context/SlugContext';
import { i18n } from '@/i18n.config';
import { iranSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

// Language labels for display
const languageLabels: Record<string, string> = {
  en: 'EN',
  fa: 'فا',
};

export function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const { state } = useSlugContext();
  const { localizedSlugs } = state;

  const pathname = usePathname(); // Current path
  const segments = pathname?.split('/') || []; // Split path into segments

  // Get available locales from i18n config or fallback to common locales
  const availableLocales =
    Object.keys(localizedSlugs).length > 0
      ? Object.keys(localizedSlugs)
      : i18n.locales; // Use locales from i18n config

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

  return (
    <div className="flex gap-2 p-1 rounded-md bg-muted dark:bg-primary">
      {!pathname?.includes('/products/') &&
        availableLocales.map((locale) => (
          <Link key={locale} href={generateLocalizedPath(locale)}>
            <div
              className={cn(
                'flex cursor-pointer items-center justify-center text-sm leading-[110%] w-8 py-1 rounded-md transition-all duration-200',
                'text-muted-foreground hover:text-foreground',
                'hover:bg-muted dark:hover:bg-muted/80',
                'hover:shadow-sm',
                locale === currentLocale
                  ? 'bg-background dark:bg-muted text-foreground shadow-sm border border-border'
                  : 'hover:border hover:border-border/50',
                locale === 'fa' ? iranSans.className : ''
              )}
              title={`Switch to ${languageLabels[locale] || locale.toUpperCase()}`}
            >
              {languageLabels[locale] || locale.toUpperCase()}
            </div>
          </Link>
        ))}
    </div>
  );
}

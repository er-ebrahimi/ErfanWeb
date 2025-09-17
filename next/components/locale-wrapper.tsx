'use client';

import { ReactNode } from 'react';

import { getLocaleClasses } from '@/lib/rtl-utils';

interface LocaleWrapperProps {
  children: ReactNode;
  className?: string;
  locale: string;
}

/**
 * Wrapper component that applies locale-specific styles
 * Automatically handles RTL for Persian and font selection
 */
export function LocaleWrapper({
  children,
  className = '',
  locale,
}: LocaleWrapperProps) {
  const { fontClass, textAlignClass, isRTL, direction } =
    getLocaleClasses(locale);

  const baseClasses = `${fontClass} ${textAlignClass}`;
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <div className={combinedClasses} dir={direction}>
      {children}
    </div>
  );
}

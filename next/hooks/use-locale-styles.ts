import { getLocaleClasses } from '@/lib/rtl-utils';

/**
 * Hook to get locale-specific styles for Persian RTL support
 */
export function useLocaleStyles(locale: string) {
  const { isRTL, fontClass, textAlignClass, direction } =
    getLocaleClasses(locale);

  return {
    locale,
    isRTL,
    fontClass,
    textAlignClass,
    direction,
    // Utility classes for RTL support
    marginLeft: isRTL ? 'ml-rtl' : 'ml-4',
    marginRight: isRTL ? 'mr-rtl' : 'mr-4',
    paddingLeft: isRTL ? 'pl-rtl' : 'pl-4',
    paddingRight: isRTL ? 'pr-rtl' : 'pr-4',
  };
}

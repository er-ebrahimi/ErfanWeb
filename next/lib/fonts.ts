import localFont from 'next/font/local';

// Persian font configuration
export const iranSans = localFont({
  src: '../fonts/IRANSansWeb.ttf',
  variable: '--font-iran-sans',
  display: 'swap',
  preload: true,
  weight: '400 500 600 700 800 900',
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
});

// Font configuration for different locales
export const getFontForLocale = (locale: string) => {
  switch (locale) {
    case 'fa':
      return iranSans;
    default:
      return null; // Use system fonts for English and French
  }
};

'use client';

import { LocaleWrapper } from '@/components/locale-wrapper';
import { getLocaleClasses } from '@/lib/rtl-utils';

interface UsageExampleProps {
  locale: string;
}

/**
 * Example showing different ways to use Persian font and RTL support
 */
export function UsageExample({ locale }: UsageExampleProps) {
  const { isRTL, fontClass, textAlignClass } = getLocaleClasses(locale);

  return (
    <div className="space-y-8 p-6">
      {/* Method 1: Using LocaleWrapper */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          {isRTL
            ? 'روش ۱: استفاده از LocaleWrapper'
            : 'Method 1: Using LocaleWrapper'}
        </h2>
        <LocaleWrapper locale={locale} className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">
            {isRTL ? 'عنوان فارسی' : 'Persian Title'}
          </h3>
          <p>
            {isRTL
              ? 'این متن به صورت خودکار از فونت فارسی و تراز راست استفاده می‌کند.'
              : 'This text automatically uses Persian font and right alignment.'}
          </p>
        </LocaleWrapper>
      </section>

      {/* Method 2: Using utility functions */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          {isRTL
            ? 'روش ۲: استفاده از توابع کمکی'
            : 'Method 2: Using Utility Functions'}
        </h2>
        <div
          className={`${fontClass} ${textAlignClass} bg-green-50 p-4 rounded-lg`}
        >
          <h3 className="text-xl font-semibold mb-2">
            {isRTL ? 'عنوان با توابع کمکی' : 'Title with Utility Functions'}
          </h3>
          <p>
            {isRTL
              ? 'این روش برای کنترل دقیق‌تر استایل‌ها مفید است.'
              : 'This method is useful for more precise style control.'}
          </p>
        </div>
      </section>

      {/* Method 3: Using Tailwind classes directly */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          {isRTL
            ? 'روش ۳: استفاده مستقیم از کلاس‌های Tailwind'
            : 'Method 3: Direct Tailwind Classes'}
        </h2>
        <div className="font-iran-sans text-right bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">
            {isRTL ? 'عنوان با کلاس‌های مستقیم' : 'Title with Direct Classes'}
          </h3>
          <p>
            {isRTL
              ? 'این روش برای استفاده سریع و ساده مناسب است.'
              : 'This method is suitable for quick and simple usage.'}
          </p>
        </div>
      </section>

      {/* Method 4: Mixed content */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          {isRTL ? 'روش ۴: محتوای ترکیبی' : 'Method 4: Mixed Content'}
        </h2>
        <LocaleWrapper locale={locale} className="bg-purple-50 p-4 rounded-lg">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              {isRTL ? 'محتوای ترکیبی' : 'Mixed Content'}
            </h3>
            <p>
              {isRTL
                ? 'این بخش شامل متن فارسی و انگلیسی است: Hello World!'
                : 'This section contains both Persian and English text: سلام دنیا!'}
            </p>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">
                {isRTL ? 'برچسب فارسی' : 'Persian Tag'}
              </span>
              <span className="px-3 py-1 bg-green-100 rounded-full text-sm">
                English Tag
              </span>
            </div>
          </div>
        </LocaleWrapper>
      </section>
    </div>
  );
}

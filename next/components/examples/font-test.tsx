'use client';

import { getLocaleClasses } from '@/lib/rtl-utils';

interface FontTestProps {
  locale: string;
}

/**
 * Test component to verify Persian font is working correctly
 */
export function FontTest({ locale }: FontTestProps) {
  const { isRTL, fontClass, textAlignClass, direction } =
    getLocaleClasses(locale);

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        {isRTL ? 'تست فونت فارسی' : 'Persian Font Test'}
      </h2>

      <div className="space-y-4">
        {/* Test 1: Using utility classes */}
        <div
          className={`${fontClass} ${textAlignClass} p-4 bg-white rounded border`}
        >
          <h3 className="text-lg font-semibold mb-2">
            {isRTL
              ? 'تست ۱: استفاده از کلاس‌های کمکی'
              : 'Test 1: Using Utility Classes'}
          </h3>
          <p>
            {isRTL
              ? 'این متن باید با فونت IRANSans نمایش داده شود.'
              : 'This text should be displayed with IRANSans font.'}
          </p>
        </div>

        {/* Test 2: Direct font class */}
        <div className="font-iran-sans text-right p-4 bg-white rounded border">
          <h3 className="text-lg font-semibold mb-2">
            {isRTL ? 'تست ۲: کلاس مستقیم فونت' : 'Test 2: Direct Font Class'}
          </h3>
          <p>
            {isRTL
              ? 'این متن با کلاس font-iran-sans نمایش داده می‌شود.'
              : 'This text is displayed with font-iran-sans class.'}
          </p>
        </div>

        {/* Test 3: Persian class */}
        <div className="font-persian text-right p-4 bg-white rounded border">
          <h3 className="text-lg font-semibold mb-2">
            {isRTL ? 'تست ۳: کلاس فارسی' : 'Test 3: Persian Class'}
          </h3>
          <p>
            {isRTL
              ? 'این متن با کلاس font-persian نمایش داده می‌شود.'
              : 'This text is displayed with font-persian class.'}
          </p>
        </div>

        {/* Test 4: Mixed content */}
        <div
          className={`${fontClass} ${textAlignClass} p-4 bg-white rounded border`}
        >
          <h3 className="text-lg font-semibold mb-2">
            {isRTL ? 'تست ۴: محتوای ترکیبی' : 'Test 4: Mixed Content'}
          </h3>
          <p>
            {isRTL
              ? 'متن فارسی: سلام دنیا! English text: Hello World!'
              : 'Persian text: سلام دنیا! English text: Hello World!'}
          </p>
        </div>

        {/* Debug info */}
        <div className="p-4 bg-blue-50 rounded border text-sm">
          <h4 className="font-semibold mb-2">Debug Info:</h4>
          <p>Locale: {locale}</p>
          <p>Is RTL: {isRTL ? 'Yes' : 'No'}</p>
          <p>Direction: {direction}</p>
          <p>Font Class: {fontClass}</p>
          <p>Text Align: {textAlignClass}</p>
        </div>
      </div>
    </div>
  );
}

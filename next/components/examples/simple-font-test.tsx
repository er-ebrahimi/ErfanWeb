'use client';

interface SimpleFontTestProps {
  locale: string;
}

/**
 * Simple test component to verify Persian font is working
 */
export function SimpleFontTest({ locale }: SimpleFontTestProps) {
  const isRTL = locale === 'fa';

  return (
    <div className="p-4 border-2 border-blue-500 rounded-lg bg-white">
      <h2 className="text-xl font-bold mb-4">
        {isRTL ? 'تست ساده فونت فارسی' : 'Simple Persian Font Test'}
      </h2>

      <div className="space-y-2">
        <p className="text-lg">
          {isRTL
            ? 'این متن باید با فونت IRANSans نمایش داده شود.'
            : 'This text should be displayed with IRANSans font.'}
        </p>

        <p className="font-iran-sans text-lg">
          {isRTL
            ? 'متن با کلاس font-iran-sans'
            : 'Text with font-iran-sans class'}
        </p>

        <p className="font-persian text-lg">
          {isRTL ? 'متن با کلاس font-persian' : 'Text with font-persian class'}
        </p>

        <div className="text-sm text-gray-600">
          <p>Locale: {locale}</p>
          <p>Is RTL: {isRTL ? 'Yes' : 'No'}</p>
          <p>Direction: {isRTL ? 'rtl' : 'ltr'}</p>
        </div>
      </div>
    </div>
  );
}

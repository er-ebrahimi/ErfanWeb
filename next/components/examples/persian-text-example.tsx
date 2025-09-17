'use client';

import { getLocaleClasses } from '@/lib/rtl-utils';

interface PersianTextExampleProps {
  locale: string;
}

/**
 * Example component showing how to use Persian font and RTL support
 */
export function PersianTextExample({ locale }: PersianTextExampleProps) {
  const { direction, fontClass, textAlignClass, isRTL } =
    getLocaleClasses(locale);

  return (
    <div className={`${fontClass} ${textAlignClass}`} dir={direction}>
      <h1 className="text-3xl font-bold mb-4">
        {isRTL ? 'سلام! این یک متن فارسی است' : 'Hello! This is English text'}
      </h1>

      <p className="text-lg mb-4">
        {isRTL
          ? 'این یک مثال از نحوه استفاده از فونت فارسی و پشتیبانی از راست به چپ در Next.js است.'
          : 'This is an example of how to use Persian font and RTL support in Next.js.'}
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">
          {isRTL ? 'ویژگی‌های پشتیبانی شده:' : 'Supported Features:'}
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>{isRTL ? 'فونت فارسی IRANSans' : 'Persian IRANSans font'}</li>
          <li>
            {isRTL ? 'تراز متن راست به چپ' : 'Right-to-left text alignment'}
          </li>
          <li>
            {isRTL
              ? 'پشتیبانی از حاشیه‌ها و فاصله‌ها'
              : 'Margin and padding support'}
          </li>
          <li>{isRTL ? 'تغییر خودکار جهت متن' : 'Automatic text direction'}</li>
        </ul>
      </div>
    </div>
  );
}

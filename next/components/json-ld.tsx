import Script from 'next/script';

import { Seo } from '@/types/types';
import { generateStructuredData } from '@/lib/shared/metadata';

export function JsonLd({
  seo,
  id = 'structured-data',
}: {
  seo?: Record<string, unknown> | Seo | null;
  id?: string;
}) {
  const data = seo ? generateStructuredData(seo) : undefined;
  if (!data) return null;

  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
}

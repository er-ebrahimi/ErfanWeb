'use client';

import dynamic from 'next/dynamic';
import React from 'react';

interface DynamicZoneComponent {
  __component: string;
  id: number;
  documentId?: string;
  [key: string]: unknown;
}

interface Props {
  dynamicZone: DynamicZoneComponent[];
  locale: string;
}

const componentMapping: { [key: string]: any } = {
  'dynamic-zone.hero': dynamic(() => import('./hero').then((mod) => mod.Hero), {
    ssr: false,
  }),
  'dynamic-zone.features': dynamic(
    () => import('./features').then((mod) => mod.Features),
    { ssr: false }
  ),
  'dynamic-zone.testimonials': dynamic(
    () => import('./testimonials').then((mod) => mod.Testimonials),
    { ssr: false }
  ),
  'dynamic-zone.how-it-works': dynamic(
    () => import('./how-it-works').then((mod) => mod.HowItWorks),
    { ssr: false }
  ),
  'dynamic-zone.brands': dynamic(
    () => import('./brands').then((mod) => mod.Brands),
    { ssr: false }
  ),
  'dynamic-zone.pricing': dynamic(
    () => import('./pricing').then((mod) => mod.Pricing),
    { ssr: false }
  ),
  'dynamic-zone.launches': dynamic(
    () => import('./launches').then((mod) => mod.Launches),
    { ssr: false }
  ),
  'dynamic-zone.cta': dynamic(() => import('./cta').then((mod) => mod.CTA), {
    ssr: false,
  }),
  'dynamic-zone.form-next-to-section': dynamic(
    () => import('./form-next-to-section').then((mod) => mod.FormNextToSection),
    { ssr: false }
  ),
  'dynamic-zone.faq': dynamic(() => import('./faq').then((mod) => mod.FAQ), {
    ssr: false,
  }),
  'dynamic-zone.related-products': dynamic(
    () => import('./related-products').then((mod) => mod.RelatedProducts),
    { ssr: false }
  ),
  'dynamic-zone.related-articles': dynamic(
    () => import('./related-articles').then((mod) => mod.RelatedArticles),
    { ssr: false }
  ),
  'dynamic-zone.cons': dynamic(
    () => import('./cons').then((mod) => mod.default),
    {
      ssr: false,
    }
  ),
  'dynamic-zone.promised-land': dynamic(
    () => import('./PromisedLand').then((mod) => mod.default),
    {
      ssr: false,
    }
  ),
  'dynamic-zone.guide': dynamic(
    () => import('./Guide').then((mod) => mod.default),
    {
      ssr: false,
    }
  ),
  'dynamic-zone.plans': dynamic(
    () => import('./Plans').then((mod) => mod.default),
    {
      ssr: false,
    }
  ),
  'dynamic-zone.project-pictures': dynamic(
    () => import('./ProjectPictures').then((mod) => mod.default),
    {
      ssr: false,
    }
  ),
  'dynamic-zone.contact': dynamic(
    () => import('./Contactus').then((mod) => mod.default),
    {
      ssr: false,
    }
  ),
};

const DynamicZoneManager: React.FC<Props> = ({ dynamicZone, locale }) => {
  return (
    <div>
      {dynamicZone.map((componentData) => {
        const Component = componentMapping[componentData.__component];
        if (!Component) {
          console.warn(`No component found for: ${componentData.__component}`);
          return null;
        }
        return (
          <Component
            key={componentData.id}
            {...componentData}
            locale={locale}
          />
        );
      })}
    </div>
  );
};

export default DynamicZoneManager;

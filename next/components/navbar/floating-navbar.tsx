'use client';

import {
  IconArticle,
  IconBriefcase,
  IconEdit,
  IconHelp,
  IconHome,
  IconLanguage,
  IconMail,
  IconMoon,
  IconQuestionMark,
  IconSettings,
  IconSun,
  IconUser,
} from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import { Link } from 'next-view-transitions';
import { useEffect, useState } from 'react';

import { LocaleSwitcher } from '../locale-switcher';
import { Button } from '@/components/elements/button';
import { Logo } from '@/components/logo';
import { FloatingDock } from '@/components/ui/floating-dock';

type Props = {
  leftNavbarItems: {
    URL: string;
    text: string;
    target?: string;
    icon?: string; // Add icon field from Strapi
  }[];
  rightNavbarItems: {
    URL: string;
    text: string;
    target?: string;
    icon?: string; // Add icon field from Strapi
  }[];
  logo: any;
  locale: string;
};

// Icon mapping for Strapi icon field or text-based fallback
const getIconForNavItem = (text: string, iconName?: string) => {
  // If Strapi provides an icon name, use it
  if (iconName) {
    switch (iconName) {
      case 'IconHome':
        return <IconHome className="h-full w-full" />;
      case 'IconArticle':
        return <IconArticle className="h-full w-full" />;
      case 'IconEdit':
        return <IconEdit className="h-full w-full" />;
      case 'IconMail':
        return <IconMail className="h-full w-full" />;
      case 'IconHelp':
        return <IconHelp className="h-full w-full" />;
      case 'IconQuestionMark':
        return <IconQuestionMark className="h-full w-full" />;
      case 'IconUser':
        return <IconUser className="h-full w-full" />;
      case 'IconBriefcase':
        return <IconBriefcase className="h-full w-full" />;
      case 'IconSettings':
        return <IconSettings className="h-full w-full" />;
      default:
        break;
    }
  }
  const lowercaseText = text.toLowerCase();
  if (lowercaseText.includes('home') || lowercaseText.includes('accueil')) {
    return <IconHome className="h-full w-full" />;
  }
  if (lowercaseText.includes('blog') || lowercaseText.includes('article')) {
    return <IconArticle className="h-full w-full" />;
  }
  if (lowercaseText.includes('about') || lowercaseText.includes('à propos')) {
    return <IconUser className="h-full w-full" />;
  }
  if (
    lowercaseText.includes('service') ||
    lowercaseText.includes('work') ||
    lowercaseText.includes('portfolio')
  ) {
    return <IconBriefcase className="h-full w-full" />;
  }
  if (lowercaseText.includes('contact')) {
    return <IconMail className="h-full w-full" />;
  }
  if (lowercaseText.includes('faq') || lowercaseText.includes('help')) {
    return <IconHelp className="h-full w-full" />;
  }
  if (lowercaseText.includes('settings') || lowercaseText.includes('config')) {
    return <IconSettings className="h-full w-full" />;
  }
  return <IconBriefcase className="h-full w-full" />;
};

export const FloatingNavbar = ({
  leftNavbarItems,
  rightNavbarItems,
  logo,
  locale,
}: Props) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !leftNavbarItems || !Array.isArray(leftNavbarItems)) {
    return null;
  }

  const dockItems = [
    ...leftNavbarItems.map((item) => ({
      title: item.text || 'Navigation',
      icon: getIconForNavItem(item.text || '', item.icon),
      href: `/${locale}${item.URL || '/'}`,
    })),
    {
      title: 'Toggle Theme',
      icon:
        theme === 'dark' ? (
          <IconSun className="h-full w-full" />
        ) : (
          <IconMoon className="h-full w-full" />
        ),
      href: '#',
      onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    },
    // {
    //   title: 'Change Language',
    //   icon: <IconLanguage className="h-full w-full" />,
    //   href: '#',
    //   onClick: () => {
    //   },
    // },
    ...(rightNavbarItems && Array.isArray(rightNavbarItems)
      ? rightNavbarItems
      : []
    ).map((item, index) => ({
      title: item.text || 'Action',
      icon: item.icon ? (
        getIconForNavItem(item.text || '', item.icon)
      ) : index === (rightNavbarItems?.length || 0) - 1 ? (
        <IconUser className="h-full w-full" />
      ) : (
        <IconBriefcase className="h-full w-full" />
      ),
      href: `/${locale}${item.URL || '/'}`,
    })),
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock
        items={dockItems}
        desktopClassName="bg-card/80 bg-gray-50 backdrop-blur-md border border-border"
        mobileClassName="bg-card/80 backdrop-blur-md border border-border rounded-full"
      />
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity pointer-events-none hover:pointer-events-auto">
        <div className="bg-card/90 backdrop-blur-md border border-border rounded-lg px-3 py-2">
          <LocaleSwitcher currentLocale={locale} />
        </div>
      </div>
    </div>
  );
};

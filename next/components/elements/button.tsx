import { LinkProps } from 'next/link';
import React from 'react';

import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'simple' | 'outline' | 'primary' | 'muted';
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  href?: LinkProps['href'];
  onClick?: () => void;
  [key: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  as: Tag = 'button',
  className,
  children,
  ...props
}) => {
  const variantClasses = {
    simple:
      'bg-transparent hover:bg-secondary border border-transparent hover:border-secondary/50 text-foreground',
    outline:
      'bg-background hover:bg-secondary border border-primary hover:border-secondary text-foreground hover:text-secondary-foreground',
    primary:
      'bg-primary hover:bg-primary/90 border border-primary text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
    muted:
      'bg-muted hover:bg-muted/80 border border-transparent text-muted-foreground hover:text-foreground',
  };

  const baseClasses =
    'relative z-10 text-sm md:text-sm font-medium transition-all duration-200 rounded-md px-4 py-2 flex items-center justify-center';

  const Element = Tag as any;

  return (
    <Element
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children ?? `Get Started`}
    </Element>
  );
};

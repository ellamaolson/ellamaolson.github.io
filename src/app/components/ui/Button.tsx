import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

interface BaseButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'outlineLight' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

interface ButtonAsButton extends Omit<BaseButtonProps, 'children'>, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: ReactNode;
  as?: 'button';
  href?: never;
}

interface ButtonAsLink extends Omit<BaseButtonProps, 'children'>, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  children: ReactNode;
  as: 'link';
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Button component - semantic button with variant system
 * 
 * Uses semantic tokens for colors, spacing, and typography.
 * Supports both button and link variants.
 * 
 * Variants:
 * - primary: Accent color CTA (use sparingly)
 * - secondary: Brand olive for secondary emphasis
 * - outline: For light surfaces with border
 * - outlineLight: For dark/brand sections
 * - ghost: Text-only button
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  // Base styles: semantic font, spacing, transitions
  // Prefer calm color transitions (avoid animating borders/shadows)
  const baseClasses =
    'inline-flex items-center justify-center font-body font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface';
  
  const variantClasses = {
    /**
     * Rooted Studio button system
     * - primary: muted ochre CTA (sparingly), dark text for contrast
     * - secondary: brand olive fill for secondary emphasis
     * - outline: for light surfaces (olive text + subtle border)
     * - outlineLight: for dark/brand sections (light text + subtle light border)
     * - ghost: quiet text button on light surfaces
     */
    primary: 'bg-accent text-text-primary hover:bg-accent/90 focus:ring-accent',
    secondary: 'bg-brand-olive text-text-onDark hover:bg-brand-olive/90 focus:ring-brand-olive',
    outline:
      // No border emphasis on hover; rely on text + surface shift.
      'border border-border-strong text-brand-olive hover:text-text-primary hover:bg-surface-muted hover:border-transparent focus:ring-brand-olive',
    outlineLight:
      // No border emphasis on hover; rely on text + subtle overlay.
      'border border-border-onDark text-text-onDark hover:bg-white/10 hover:border-transparent focus:ring-text-onDark',
    ghost: 'text-brand-olive hover:bg-surface-muted focus:ring-brand-olive',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (props.as === 'link' && props.href) {
    const { as, href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

import { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

/**
 * Header component - semantic heading with default styling
 *
 * Uses DM Serif Display (font-heading) with appropriate size/weight from design tokens.
 * Defaults to text-text-primary color, can be overridden via className.
 *
 * @example
 * <Header level={1}>Main Title</Header>
 * <Header level={2} className="text-text-onDark">Section Title</Header>
 */
export function Header({ children, level = 1, className = '', as }: HeaderProps) {
  const Tag = as || (`h${level}` as keyof JSX.IntrinsicElements);

  // Map heading levels to typography tokens
  const sizeClasses = {
    1: 'text-h1 mb-6', // 2rem, mb-1.5rem
    2: 'text-h2 mb-4', // 1.625rem, mb-1rem
    3: 'text-h3 mb-3', // 1.25rem, mb-0.75rem
    4: 'text-h4 mb-2', // 1.125rem, mb-0.5rem
    5: 'text-h5 mb-1', // 1rem, mb-0.25rem
    6: 'text-h6 mb-1', // 0.875rem, mb-0.25rem
  };

  // Base styles: heading font, weight
  // Default text color is applied only if no text color class is provided in className
  const baseClasses = 'font-heading font-medium';

  // Check if className includes a text color class (text-text-* or text-* color utilities)
  // This avoids false positives from classes like 'text-center', 'text-balance', etc.
  const hasTextColor = /\btext-(text-|onDark|primary|secondary|subtle|accent|brand-|surface-)/.test(
    className
  );

  // Apply default text color only if no text color is specified
  const defaultTextColor = hasTextColor ? '' : 'text-text-primary';

  // Ensure className overrides come after base classes for proper CSS specificity
  const classes = `${baseClasses} ${defaultTextColor} ${sizeClasses[level]} ${className}`.trim();

  return <Tag className={classes}>{children}</Tag>;
}

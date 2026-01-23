import { ReactNode } from 'react';

interface ParagraphProps {
  children: ReactNode;
  variant?: 'p1' | 'p2' | 'p3';
  className?: string;
  as?: 'p' | 'span' | 'div';
}

/**
 * Paragraph component - semantic text with default styling
 * 
 * Uses Inter (font-body) with appropriate size/line-height from design tokens.
 * Defaults to text-text-primary color, can be overridden via className.
 * 
 * Variants:
 * - p1: Large body text (1.125rem / 18px, line-height 1.7)
 * - p2: Default body text (1rem / 16px, line-height 1.6)
 * - p3: Small body text (0.875rem / 14px, line-height 1.5)
 * 
 * @example
 * <Paragraph>Default body text</Paragraph>
 * <Paragraph variant="p1" className="text-text-secondary">Large body text</Paragraph>
 */
export function Paragraph({
  children,
  variant = 'p2',
  className = '',
  as,
}: ParagraphProps) {
  const Tag = as || 'p';
  
  // Map variants to typography tokens
  const variantClasses = {
    p1: 'text-lead', // 1.125rem, line-height 1.7
    p2: 'text-body', // 1rem, line-height 1.6
    p3: 'text-small', // 0.875rem, line-height 1.5
  };
  
  // Base styles: body font, weight
  // Default text color is applied only if no text color class is provided in className
  const baseClasses = 'font-body font-normal';
  
  // Check if className includes a text color class (text-text-* or text-* color utilities)
  // This avoids false positives from classes like 'text-center', 'text-balance', etc.
  const hasTextColor = /\btext-(text-|onDark|primary|secondary|subtle|accent|brand-|surface-)/.test(className);
  
  // Apply default text color only if no text color is specified
  const defaultTextColor = hasTextColor ? '' : 'text-text-primary';
  
  const classes = `${baseClasses} ${defaultTextColor} ${variantClasses[variant]} ${className}`.trim();
  
  return <Tag className={classes}>{children}</Tag>;
}

import { ReactNode } from 'react';

type GridVariant = 'split' | 'asymmetric';

interface GridProps {
  children: ReactNode;
  className?: string;
  variant?: GridVariant;
  reverseOnDesktop?: boolean;
}

/**
 * A simple layout primitive for editorial/asymmetrical sections.
 * - Stacks naturally on mobile
 * - Supports a slightly asymmetrical 2-col layout on desktop
 */
export function Grid({
  children,
  className = '',
  variant = 'split',
  reverseOnDesktop = false,
}: GridProps) {
  const variantClasses: Record<GridVariant, string> = {
    split: 'md:grid-cols-2',
    asymmetric: 'md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]',
  };

  const reverseClasses = reverseOnDesktop ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : '';

  return (
    <div className={`grid gap-10 md:gap-14 ${variantClasses[variant]} ${reverseClasses} ${className}`}>
      {children}
    </div>
  );
}


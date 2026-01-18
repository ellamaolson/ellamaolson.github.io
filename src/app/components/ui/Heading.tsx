import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function Heading({ 
  children, 
  level = 1,
  className = '',
  as
}: HeadingProps) {
  const Tag = as || (`h${level}` as keyof JSX.IntrinsicElements);
  
  const sizeClasses = {
    1: 'text-heading-1 font-medium mb-6 font-editorial tracking-[-0.01em]',
    2: 'text-heading-2 font-medium mb-4 font-editorial tracking-[-0.01em]',
    3: 'text-heading-3 font-medium mb-3 font-editorial',
    4: 'text-lg font-medium mb-2',
    5: 'text-base font-medium mb-2',
    6: 'text-sm font-medium mb-1',
  };

  return (
    <Tag className={`${sizeClasses[level]} ${className}`}>
      {children}
    </Tag>
  );
}

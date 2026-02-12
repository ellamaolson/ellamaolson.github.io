import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'content' | 'reading' | 'wide' | 'notebook' | 'full';
}

export function Container({ children, className = '', maxWidth = 'content' }: ContainerProps) {
  const maxWidthClasses = {
    content: 'max-w-full sm:max-w-content',
    reading: 'max-w-full sm:max-w-reading',
    wide: 'max-w-full sm:max-w-wide',
    notebook: 'max-w-full sm:max-w-5xl',
    full: 'max-w-full',
  };

  return (
    <div className={`mx-auto px-5 sm:px-6 lg:px-8 ${maxWidthClasses[maxWidth]} ${className}`}>
      {children}
    </div>
  );
}

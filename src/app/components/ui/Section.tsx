import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'salt' | 'warm-sand' | 'antique' | 'coffee' | 'olive-leaf' | 'noir' | 'transparent';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Section({ 
  children, 
  className = '',
  background = 'transparent',
  padding = 'lg'
}: SectionProps) {
  const backgroundClasses = {
    salt: 'bg-salt',
    'warm-sand': 'bg-warm-sand',
    antique: 'bg-antique',
    coffee: 'bg-coffee',
    'olive-leaf': 'bg-olive-leaf',
    noir: 'bg-noir',
    transparent: 'bg-transparent',
  };

  const paddingClasses = {
    none: '',
    sm: 'py-section-sm',
    md: 'py-section',
    lg: 'py-section',
  };

  const textColorClasses = {
    salt: 'text-noir',
    'warm-sand': 'text-noir',
    antique: 'text-noir',
    coffee: 'text-salt',
    'olive-leaf': 'text-salt',
    noir: 'text-salt',
    transparent: 'text-noir',
  };

  return (
    <section 
      className={`section-transition ${backgroundClasses[background]} ${textColorClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </section>
  );
}

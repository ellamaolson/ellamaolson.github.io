import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  /**
   * Semantic backgrounds (preferred):
   * - surface: default light background
   * - surfaceMuted: alternate light section for rhythm
   * - surfaceRaised: slightly lifted light surface
   * - brand: deep forest green structural section
   *
   * Legacy backgrounds are still supported for now to avoid breaking pages while we migrate.
   */
  background?:
    | 'surface'
    | 'surfaceMuted'
    | 'surfaceRaised'
    | 'brand'
    | 'transparent'
    | 'salt'
    | 'warm-sand'
    | 'antique'
    | 'coffee'
    | 'olive-leaf'
    | 'noir';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Section({ 
  children, 
  className = '',
  background = 'transparent',
  padding = 'lg'
}: SectionProps) {
  const backgroundClasses = {
    // Semantic
    surface: 'bg-surface',
    surfaceMuted: 'bg-surface-muted',
    surfaceRaised: 'bg-surface-raised',
    brand: 'bg-brand',
    // Legacy
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
    // Semantic (ensure accessible contrast)
    surface: 'text-text-primary',
    surfaceMuted: 'text-text-primary',
    surfaceRaised: 'text-text-primary',
    brand: 'text-text-onDark',
    transparent: 'text-text-primary',
    // Legacy mapping (for now)
    salt: 'text-noir',
    'warm-sand': 'text-noir',
    antique: 'text-noir',
    coffee: 'text-salt',
    'olive-leaf': 'text-salt',
    noir: 'text-salt',
  };

  return (
    <section 
      className={`section-transition ${backgroundClasses[background]} ${textColorClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </section>
  );
}

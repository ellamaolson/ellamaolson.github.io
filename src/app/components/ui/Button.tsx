import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

interface BaseButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
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

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-olive-leaf text-salt hover:bg-opacity-90 focus:ring-olive-leaf',
    secondary: 'bg-antique text-noir hover:bg-opacity-90 focus:ring-antique',
    // Default outline is optimized for dark (olive) sections: light text + subtle light border
    outline:
      'border border-salt/35 text-salt hover:bg-salt/10 hover:border-salt/50 focus:ring-salt/50',
    ghost: 'text-olive-leaf hover:bg-olive-leaf/10 focus:ring-olive-leaf',
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

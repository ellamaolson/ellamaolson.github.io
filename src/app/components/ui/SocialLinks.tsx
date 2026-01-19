import { GitHubIcon } from '../icons/GitHubIcon';
import { LinkedInIcon } from '../icons/LinkedInIcon';
import { MediumIcon } from '../icons/MediumIcon';
import { XIcon } from '../icons/XIcon';

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/ellamaolson',
    label: 'GitHub',
    icon: <GitHubIcon />,
  },
  {
    href: 'https://www.linkedin.com/in/elanaolson',
    label: 'LinkedIn',
    icon: <LinkedInIcon />,
  },
  {
    href: 'https://medium.com/@elanaolson',
    label: 'Medium',
    icon: <MediumIcon />,
  },
  {
    href: 'https://twitter.com/elanathellama',
    label: 'Twitter/X',
    icon: <XIcon />,
  },
];

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <nav 
      className={`flex items-center gap-4 ${className}`}
      aria-label="Social links"
    >
      {socialLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-brand-olive hover:text-text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-olive focus:ring-offset-2 focus:ring-offset-surface rounded-md"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </nav>
  );
}

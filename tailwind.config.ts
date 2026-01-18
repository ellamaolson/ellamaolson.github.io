import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Muted earth tone palette
        salt: '#F1EBE4', // Warm sand / light stone
        antique: '#D4C5A9', // Yellowish stone / warm beige
        coffee: '#734E30', // Clay / terracotta (small accents only)
        'olive-leaf': '#464831', // Olive / moss green (main pop of color)
        noir: '#2E2F23', // Soft charcoal
        'raisin-black': '#22231A', // Darkest charcoal
        // Additional warm tones for variety
        'warm-sand': '#F4EEE6', // Warm beige (warmer, less yellow)
        'dusty-ochre': '#A68B5B', // Dusty ochre accent
        'soft-clay': '#8B6F47', // Soft clay variant
      },
      typography: {
        // Typography scale for reading comfort
        'display-1': {
          fontSize: '3.5rem',
          lineHeight: '1.1',
          fontWeight: '500',
          letterSpacing: '-0.02em',
        },
        'display-2': {
          fontSize: '2.5rem',
          lineHeight: '1.2',
          fontWeight: '500',
          letterSpacing: '-0.01em',
        },
        'heading-1': {
          fontSize: '2rem',
          lineHeight: '1.3',
          fontWeight: '500',
        },
        'heading-2': {
          fontSize: '1.5rem',
          lineHeight: '1.4',
          fontWeight: '500',
        },
        'heading-3': {
          fontSize: '1.25rem',
          lineHeight: '1.5',
          fontWeight: '500',
        },
        'body-large': {
          fontSize: '1.125rem',
          lineHeight: '1.7',
          fontWeight: '400',
        },
        body: {
          fontSize: '1rem',
          lineHeight: '1.6',
          fontWeight: '400',
        },
        'body-small': {
          fontSize: '0.875rem',
          lineHeight: '1.5',
          fontWeight: '400',
        },
      },
      spacing: {
        // Generous spacing for calm, welcoming feel
        'section': '6rem', // 96px - vertical spacing between major sections
        'section-sm': '4rem', // 64px - for smaller sections
        'content': '2rem', // 32px - spacing within content blocks
        'content-sm': '1.5rem', // 24px - tighter content spacing
      },
      maxWidth: {
        'reading': '65ch', // Optimal reading width for text blocks
        'content': '80%', // Main layout width
        'wide': '80%', // Hero/layout width
      },
    },
  },
  plugins: [],
};
export default config;

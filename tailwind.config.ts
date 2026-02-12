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
        // Semantic font tokens
        // heading uses CSS variable from next/font/google (DM Serif Display)
        heading: ['var(--font-heading)', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'], // Body text and UI
        // Legacy aliases (for backward compatibility)
        inter: ['Inter', 'system-ui', 'sans-serif'],
        editorial: ['var(--font-heading)', 'serif'],
        abril: ['var(--font-heading)', 'serif'],
      },
      colors: {
        /**
         * Elana Olson theme
         * - Warm stone surfaces + charcoal text
         * - Deep forest greens for structure (nav/footer/dark sections)
         * - Ochre + rust as intentional accents (CTA/hover), used sparingly
         */

        /**
         * Base palette (for reference only; prefer semantic tokens below).
         * These are the foundational hues provided in the brief.
         */
        palette: {
          // Dark / Structural
          forest: '#242D1A', // Deep Forest Green: nav/footer/hero/dark sections
          trunk: '#1B1C14', // Charcoal Trunk: headings + primary text
          // Greens
          olive: '#2E4A0D', // Olive Leaf: supportive green accent (links/active states)
          moss: '#2F3416', // Mossed Bark: secondary deep green for depth
          // Neutrals
          stone: '#E7E4DC', // Warm Stone: default light surface
          bark: '#726D6D', // Weathered Bark Grey: secondary text, subtle UI
          // Accents
          ochre: '#C2A23A', // Muted Ochre: primary CTA/highlight
          rust: '#A15A2B', // Soft Rust: secondary accent/hover states
        },

        /**
         * Semantic tokens (preferred)
         * Usage examples:
         * - `bg-surface` / `bg-surface-muted`
         * - `text-primary` / `text-secondary`
         * - `bg-brand` for structural dark sections
         * - `text-onBrand` for readable text on dark sections
         * - `bg-accent` for primary CTAs (sparingly)
         */
        surface: {
          DEFAULT: '#E7E4DC', // Main light background surface
          muted: '#DDD8CF', // Slightly darker stone for section rhythm
          raised: '#F1EFE9', // Softened stone for subtle elevation (no stark white)
          inverse: '#242D1A', // Dark surface (brand anchor),
          white: '#FFFFFF', // Pure white for high contrast needs (sparingly)
        },
        text: {
          primary: '#1B1C14', // Primary reading + headings on light surfaces
          secondary: '#726D6D', // Secondary text, captions, metadata
          onDark: '#E7E4DC', // Text on dark/brand surfaces
          subtle: 'rgba(27, 28, 20, 0.72)', // Softer body text on light surfaces
        },
        brand: {
          DEFAULT: '#242D1A', // Structural anchor: nav/footer/dark sections
          olive: '#2E4A0D', // Green highlight (links/active states)
          moss: '#2F3416', // Secondary dark green for depth
        },
        accent: {
          DEFAULT: '#C2A23A', // Primary CTA/highlight (sparingly)
          hover: '#A15A2B', // Secondary accent/hover states (sparingly)
        },
        border: {
          subtle: 'rgba(27, 28, 20, 0.14)', // Light borders on stone surfaces
          strong: 'rgba(27, 28, 20, 0.28)', // Stronger separators/dividers
          onDark: 'rgba(231, 228, 220, 0.22)', // Borders on dark/brand sections
        },

        /**
         * Legacy aliases (temporary)
         * Keep existing classnames working until components are refactored to semantic tokens.
         */
        salt: '#E7E4DC', // alias -> surface (DEFAULT)
        'warm-sand': '#E7E4DC', // alias -> surface (DEFAULT)
        antique: '#DDD8CF', // alias -> surface (muted)
        noir: '#1B1C14', // alias -> text.primary
        'raisin-black': '#1B1C14', // alias -> text.primary (deep)
        'olive-leaf': '#2E4A0D', // alias -> brand.olive
        coffee: '#A15A2B', // alias -> accent.hover (rust)
        'dusty-ochre': '#C2A23A', // alias -> accent (ochre)
        'soft-clay': '#A15A2B', // alias -> accent.hover (rust)
      },
      /**
       * Typography scale (editorial, calm, readable)
       * Semantic tokens for consistent typography hierarchy.
       * Prefer left-aligned text blocks with generous line height.
       */
      fontSize: {
        // Display / hero moments
        display: ['3.5rem', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-sm': ['2.75rem', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
        // Heading scale (h1-h6)
        h1: ['2.5rem', { lineHeight: '1.3', letterSpacing: '0.02em' }], // 40px
        h2: ['1.625rem', { lineHeight: '1.4', letterSpacing: '0.02em' }], // 26px
        h3: ['1.25rem', { lineHeight: '1.5', letterSpacing: '0.02em' }], // 20px
        h4: ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.02em' }], // 18px
        h5: ['1rem', { lineHeight: '1.5', letterSpacing: '0.02em' }], // 16px
        h6: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.02em' }], // 14px
        // Body text scale
        lead: ['1.125rem', { lineHeight: '1.7' }], // 18px - large body
        body: ['1rem', { lineHeight: '1.6' }], // 16px - default body
        small: ['0.875rem', { lineHeight: '1.5' }], // 14px - small body
      },
      borderRadius: {
        // Semantic border radius tokens
        sm: '0.25rem', // 4px - subtle rounding
        DEFAULT: '0.375rem', // 6px - default
        md: '0.5rem', // 8px - medium
        lg: '0.75rem', // 12px - large
        xl: '1rem', // 16px - extra large
        '2xl': '1.5rem', // 24px - cards, sections
      },
      spacing: {
        // Generous spacing for calm, welcoming feel
        section: '6rem', // 96px - vertical spacing between major sections
        'section-sm': '4rem', // 64px - for smaller sections
        content: '2rem', // 32px - spacing within content blocks
        'content-sm': '1.5rem', // 24px - tighter content spacing
        // Page rhythm helpers
        gutter: '1.25rem', // Default horizontal padding (mobile)
        'gutter-lg': '2rem', // Default horizontal padding (desktop)
      },
      maxWidth: {
        reading: '65ch', // Optimal reading width for text blocks
        content: '80%', // Main layout width
        wide: '80%', // Hero/layout width
      },
    },
  },
  plugins: [],
};
export default config;

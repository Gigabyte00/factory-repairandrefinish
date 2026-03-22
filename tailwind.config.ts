import type { Config } from 'tailwindcss';

// =============================================================================
// Repair & Refinish - Tailwind CSS Configuration
// =============================================================================
// Tailwind v4 uses CSS-based configuration (@theme in globals.css) as the
// primary config source. This file provides legacy plugin support (typography)
// and acts as a reference for the design system tokens.
//
// Color tokens, fonts, and custom utilities are defined in globals.css.
// =============================================================================

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A5F',
          light: '#2A5080',
          dark: '#142840',
          50: '#EFF5FB',
          100: '#D9E7F5',
          200: '#B3CFEB',
          300: '#8DB7E1',
          400: '#5A93D0',
          500: '#336FB5',
          600: '#1E3A5F',
          700: '#172D4A',
          800: '#112035',
          900: '#0A1320',
          950: '#050A10',
        },
        accent: {
          DEFAULT: '#E8712B',
          light: '#F0944E',
          dark: '#C95D1E',
          50: '#FEF3EC',
          100: '#FCE3D0',
          200: '#F9C7A1',
          300: '#F5AB72',
          400: '#F0944E',
          500: '#E8712B',
          600: '#C95D1E',
          700: '#9A4717',
          800: '#6B3110',
          900: '#3C1B09',
          950: '#1E0E05',
        },
        warm: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
          950: '#0C0A09',
        },
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#44403C',
            '--tw-prose-headings': '#1E3A5F',
            '--tw-prose-lead': '#57534E',
            '--tw-prose-links': '#E8712B',
            '--tw-prose-bold': '#1C1917',
            '--tw-prose-counters': '#78716C',
            '--tw-prose-bullets': '#A8A29E',
            '--tw-prose-hr': '#E7E5E4',
            '--tw-prose-quotes': '#1E3A5F',
            '--tw-prose-quote-borders': '#E8712B',
            '--tw-prose-captions': '#78716C',
            '--tw-prose-code': '#1E3A5F',
            '--tw-prose-pre-code': '#F5F5F4',
            '--tw-prose-pre-bg': '#1C1917',
            '--tw-prose-th-borders': '#D6D3D1',
            '--tw-prose-td-borders': '#E7E5E4',
            maxWidth: '75ch',
            h1: {
              fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
              fontWeight: '700',
            },
            h2: {
              fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
              fontWeight: '700',
            },
            h3: {
              fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
              fontWeight: '600',
            },
            h4: {
              fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
              fontWeight: '600',
            },
            a: {
              color: '#E8712B',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              fontWeight: '500',
              '&:hover': {
                color: '#C95D1E',
              },
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            code: {
              backgroundColor: '#F5F5F4',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
              fontWeight: '500',
            },
            blockquote: {
              borderLeftColor: '#E8712B',
              borderLeftWidth: '4px',
              fontStyle: 'normal',
              backgroundColor: '#FAFAF9',
              padding: '1rem 1.5rem',
              borderRadius: '0 0.5rem 0.5rem 0',
            },
            img: {
              borderRadius: '0.75rem',
            },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(232, 113, 43, 0)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(232, 113, 43, 0.2)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

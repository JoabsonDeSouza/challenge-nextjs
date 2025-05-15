import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: 'var(--font-jetbrainsMono), monospace',
    },
    extend: {
      colors: {
        primary: '#1c1c22',
        background: '#A89A7F',
      },
    },
  },
} satisfies Config;

import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: {
          100: '#d1fadd',
          200: '#a3f6ba',
          300: '#75f198',
          400: '#47ed75',
          500: '#19e853',
          600: '#14ba42',
          700: '#0f8b32',
          800: '#0a5d21',
          900: '#052e11',
        },
        primaryBlue: {
          100: '#d1e9fa',
          200: '#a3d2f6',
          300: '#75bcf1',
          400: '#47a5ed',
          500: '#198fe8',
          600: '#1472ba',
          700: '#0f568b',
          800: '#0a395d',
          900: '#051d2e',
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-in-out',
        'slide-down': 'slide-down 0.5s ease-in-out',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui', // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: 'light', // default theme from the themes object
      defaultExtendTheme: 'light', // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            background: '#e4fdee',
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: '#051d2e',
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
export default config;

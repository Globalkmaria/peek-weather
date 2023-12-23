import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DEC3A0',
        secondary: '#000000',
      },
      keyframes: {
        'open-scroll': {
          '0%': { 'grid-template-rows': '0fr' },
          '100%': { 'grid-template-rows': '1fr' },
        },
        'close-scroll': {
          '0%': { 'grid-template-rows': '1fr' },
          '100%': { 'grid-template-rows': '0fr' },
        },
      },
      animation: {
        'open-scroll': 'open-scroll 0.2s ease-in-out forwards',
        'close-scroll': 'close-scroll 0.2s ease-in-out forwards',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
export default config;

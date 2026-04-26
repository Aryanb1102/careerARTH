import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F3E8',
        parchment: '#F0ECE1',
        sand: '#E6E1D6',
        forest: '#1E3329',
        slate: '#2C3A35',
        charcoal: '#1A1C1B',
        gold: '#B59654',
        graphite: '#2d3436',
        pearl: '#f5f6fa',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['var(--font-work-sans)', 'sans-serif'],
        'work-sans': ['var(--font-work-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, #E6E1D6 1px, transparent 1px), linear-gradient(to bottom, #E6E1D6 1px, transparent 1px)',
      },
      boxShadow: {
        card: '0 20px 50px -12px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;

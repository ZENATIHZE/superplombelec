import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs marque Super Plomb Elec (extraites du logo)
        brand: {
          50: '#eef8fd',
          100: '#d5edf9',
          200: '#abdaf3',
          300: '#7dc4eb',
          400: '#5bb1e1',
          500: '#3D9FD4',  // Bleu logo
          600: '#2683b8',
          700: '#1f6993',
          800: '#185478',
          900: '#13405b',
        },
        accent: {
          50: '#fffbe6',
          100: '#fff5b8',
          200: '#ffea7a',
          300: '#fcd838',
          400: '#f4c910',
          500: '#F2C203',  // Jaune logo
          600: '#d4a902',
          700: '#a78505',
          800: '#85690b',
          900: '#6b540e',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Nunito', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: { DEFAULT: '1rem', md: '2rem', lg: '3rem' },
        screens: { '2xl': '1280px' },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;

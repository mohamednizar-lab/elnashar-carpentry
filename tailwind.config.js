/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#faf8f5',
          100: '#f3efe8',
          200: '#e6ddd0',
          300: '#d4c4ad',
          400: '#bea588',
          500: '#a88a6b',
          600: '#8b6f52',
          700: '#725a43',
          800: '#5f4b39',
          900: '#504032',
        },
        walnut: {
          DEFAULT: '#5c4033',
          dark: '#3d2b24',
          light: '#8b6f52',
        },
      },
      fontFamily: {
        arabic: ['Tajawal', 'sans-serif'],
        sans: ['DM Sans', 'Tajawal', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      animationFillMode: {
        forwards: 'forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(92, 64, 51, 0.1), 0 2px 8px -2px rgba(0, 0, 0, 0.06)',
        'card': '0 10px 40px -15px rgba(92, 64, 51, 0.2)',
      },
    },
  },
  plugins: [],
}

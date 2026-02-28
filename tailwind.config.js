/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a2a5e',
          50: '#e8eaf4',
          100: '#c5cae4',
          200: '#9fa8d2',
          300: '#7986c0',
          400: '#5c6db3',
          500: '#3f55a6',
          600: '#384d9e',
          700: '#2f4394',
          800: '#26398a',
          900: '#1a2a5e',
        },
        gold: {
          DEFAULT: '#c9a84c',
          50: '#fdf8ec',
          100: '#faeece',
          200: '#f5e0a0',
          300: '#f0d070',
          400: '#e8c048',
          500: '#c9a84c',
          600: '#b8963e',
          700: '#a07e2c',
          800: '#896821',
          900: '#71551a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'persian-green': {
          50: '#f2fbf9',
          100: '#d3f4ed',
          200: '#a6e9db',
          300: '#72d6c6',
          400: '#44bdac',
          500: '#2a9d8f',
          600: '#208177',
          700: '#1d6861',
          800: '#1c534f',
          900: '#1b4642',
          950: '#0a2928',
        },
        'rob-roy': {
          50: '#fdf9ed',
          100: '#f8edcd',
          200: '#f0d997',
          300: '#e9c46a',
          400: '#e2ab3d',
          500: '#da8d26',
          600: '#c16c1e',
          700: '#a04f1d',
          800: '#833e1d',
          900: '#6c331b',
          950: '#3d190b',
        },
        'dark-gray': '#264653',
        'light-gray': '#F4F4F4',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pizzaLarge: ['Rubik Bubbles', 'system-ui'],
        pizzaHeader: ['Gochi Hand', 'cursive'],
        pizzaText: ['Denk One', 'sans-serif'],
        pizzaIngrd: ['Bad Script', 'cursive'],
        pizzaLarge2: ['Chewy', 'system-ui'],
      },
      colors: {
        pizzaRed: '#A10702',
        pizzaOrange: '#FAA613',
      },
    },
  },
  plugins: [],
};

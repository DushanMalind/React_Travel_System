/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#F5F5F5',
        secondary: '#008000',
      },

      fontFamily: {
        /* sans:['Vina Sans', 'sans-serif']*/
        /*sans: ['Dancing Script', 'Dancing Script'],*/
        serif: ['ui-serif', 'Georgia'],
      }
    },
  },
  plugins: [],
}


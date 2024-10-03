/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.html", "./src/**/*.js" ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        youngSerif: ['Young Serif', 'serif'],
      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        stone100: 'hsl(30, 54%, 90%)',
        stone150: 'hsl(30, 18%, 87%)',
        stone600: 'hsl(30, 10%, 34%)',
        stone900: 'hsl(24, 5%, 18%)',
        brown800: 'hsl(14, 45%, 36%)',
        rose800: 'hsl(332, 51%, 32%)',
        rose50: 'hsl(330, 100%, 98%)',
      },
      
    },
  },
  plugins: [],
}

/* - White: hsl(0, 0%, 100%)

- Stone 100: hsl(30, 54%, 90%)
- Stone 150: hsl(30, 18%, 87%)
- Stone 600: hsl(30, 10%, 34%)
- Stone 900: hsl(24, 5%, 18%)

- Brown 800: hsl(14, 45%, 36%)

- Rose 800: hsl(332, 51%, 32%)
- Rose 50: hsl(330, 100%, 98%)
*/
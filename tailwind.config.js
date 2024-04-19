/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1020px',
        xl: '1440px',
      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        light_pink: ' hsl(275, 100%, 97%)',
        grayish_purple: 'hsl(292, 16%, 49%)',
        dark_purple: 'hsl(292, 42%, 14%)'

      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}


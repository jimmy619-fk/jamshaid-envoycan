/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        adineue: ['Adineue Pro', 'sans-serif'],
      },
    },
    screens: {
      sm: "440px",


      //   // => @media (min-width: 550px) { ... }

      md: "768px",

      //   // => @media (min-width: 950px) { ... }

      lg: "1024px",
      //   // => @media (min-width: 1128px) { ... }

      xl: "1280px",
      xll: "1500px",
      //   // => @media (min-width: 1640px) { ... }
      "2xl": "1536px",
      //   // => @media (min-width: 1536px) { ... }
      "3xl": "1870px",
    },
  },
  plugins: [require("flowbite/plugin")],
}
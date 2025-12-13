const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./en/**/*.html",
    "./pl/**/*.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./public/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        secondary: ["\"Sawton Industrial\"", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#500C2D",
        secondary: "#F8E7D6",
        accent1: "#F7A527",
        accent2: "#EC7E51",
      },
      
    },
  },
  plugins: [],
};

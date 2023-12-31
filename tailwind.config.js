/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("animate", "&[data-animate='true']");
      addVariant("animate-load", "&[data-animateload='true']");
    }),
  ],
};

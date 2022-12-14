/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      "dark-blue": "#0C3944",
      "light-blue": "#186c84",
      "red-pink": "#E36164",
      "flash-yellow": "#FFF30D",
      "light-green": "#82B99E",
      "light-orange": "#F3976B",
      "light-grey": "#f7f7f7",
    },
  },
  plugins: [require("flowbite/plugin")],
};

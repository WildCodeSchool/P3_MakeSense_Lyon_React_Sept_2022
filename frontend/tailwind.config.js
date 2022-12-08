/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#0C3944",
          yellow: "#FFF30D",
          red: "#E36164",
          orange: "#F3976B",
          green: "#78AB92",
          nav: "#196C84",
        },
      },
    },
  },
  plugins: [],
};

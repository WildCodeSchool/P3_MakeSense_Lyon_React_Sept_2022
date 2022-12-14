/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1600px",
      "xxl-max": { max: "1600px" },
      "xl-max": { max: "1279px" },
      "lg-max": { max: "1023px" },
      "md-max": { max: "767px" },
      "sm-max": { max: "639px" },
    },
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
      boxShadow: {
        1: "10px 10px 20px 0 rgba(50, 0, 50, 0.3)",
      },
    },
  },
  plugins: [],
};

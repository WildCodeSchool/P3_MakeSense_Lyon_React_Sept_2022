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
        "dark-blue": "#0C3944",
        "light-blue": "#186c84",
        "red-pink": "#E36164",
        "flash-yellow": "#FFF30D",
        "light-green": "#82B99E",
        "light-orange": "#F3976B",
        "light-grey": "#f7f7f7",
        "nav-color": "#196C84",
      },
      boxShadow: {
        1: "10px 10px 20px 0 rgba(50, 0, 50, 0.3)",
      },
    },
  },
  plugins: [],
};

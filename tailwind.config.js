/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      red: "#f65351",
      blue: "#0a317b",
      veryLight: "#f7fafd",
      light1: "#e5effa",
      light2: "#dde7ee",
      grayish: "#939dae",
      darkGrayish: "#5e6778",
      darkBLue: "#1c202b",
      white: "#ffffff",
    },
    fontSize: {
      heading: "20px",
      parag: "16px",
    },
    screens: {
      md: "768px",
      lg: "1440px",
    },
    extend: {},
  },
  plugins: [],
};

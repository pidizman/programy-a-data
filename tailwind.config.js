/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      background: "#222831",
      green: "#7bc74d",
      white: "#eeeeee",
      gray: "#393e46",
      "gray-900": "rgba(57, 62, 70, 0.9)",
    },
    extend: {
      transitionProperty: {
        width: "width",
        height: "height",
      },
    },
  },
  plugins: [],
};

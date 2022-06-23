/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      animation: {
        "App-logo": "spin infinite 20s linear",
      },
      colors: {
        "primary-dark": "#282c34",
        "primary-link": "#61dafb",
      },
    },
  },
  plugins: [],
};

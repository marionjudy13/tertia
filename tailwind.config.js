/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "Arial", "sans-serif"],
    },
    colors: {
      green: "#1EB999",
      gray: "#43464d",
    },
    extend: {},
  },
  plugins: [],
};

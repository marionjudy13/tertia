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
      black: "#000",
      white: "#fff",
    },
    extend: {
      backgroundImage: {
        "tertia-bg": "url('/tertia-bg.jpg')",
      },
    },
  },
  variants: {
    backgroundColor: ["hover", "last"],
  },
  plugins: [],
};

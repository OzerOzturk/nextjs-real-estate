/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      background: "#1D1D20",
      primary: "#FFFFFF",
      secondary: "#9E9E9E",
      active: "#00BFFF",
      light: "#121212",
    },
  },
  plugins: [],
};

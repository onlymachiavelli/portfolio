/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    screens:{
      tablet : "888px"
    },
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],

      },
      colors: {
        dark : "#101010",
        red :"#BD2F2F"
      }
    },
  },
  plugins: [],
}
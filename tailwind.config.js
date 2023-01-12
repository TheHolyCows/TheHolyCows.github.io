/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'black': '#232323',
          'dark-grey': '#535353',
          'offwhite': '#dfdfdf'
        }
      }
    },
  },
  plugins: [],
}
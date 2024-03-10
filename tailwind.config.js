/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       height: {
        "86v": "100vh",
      }
    },
  },
  plugins: [],
}

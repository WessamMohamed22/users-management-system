/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D52A1",
        secondary: "#7191E6",
        accent: "#ADBADA",
        'export-blue': '#3d52a1',
        'export-blue-h': '#344994',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#261E1E", 
        green: "#54736B", 
        light: "#FCFCFC", 
        grey: "#F5F5F5", 
        secondary: "#F28482",
        lightpink: "#FFF4F3",
        yellow: "#F6BD60",
      },
    },
  },
  plugins: [],
}
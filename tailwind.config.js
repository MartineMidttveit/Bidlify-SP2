/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#261E1E", 
        green: "#5D897E", 
        light: "#FCFCFC", 
        grey: "#F5F5F5", 
        secondary: "#F28482",
        lightpink: "#FFF9F5",
      },
    },
  },
  plugins: [],
}
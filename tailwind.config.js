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
        secondary: "#D0796B",
        lightpink: "#FFF3EA",
      },
    },
  },
  plugins: [],
}
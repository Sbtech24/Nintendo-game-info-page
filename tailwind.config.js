/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        red:"#e60012",
        blue:"#0b2b6b",
        lightBlue:"#d6f0fa",
        white:"#ffffff",
        lightGrey:"#efefef",
        darkGrey:"#434242",
        darkGrey2:"#484848",
      }
    },
  },
  plugins: [],
}


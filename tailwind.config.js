/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryYellow: '#FFF5E1',
        pink: '#E1D2D2',
        footerColor:'#FFEFC7'
      }
    },
  },
  plugins: [],
}
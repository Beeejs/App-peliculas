/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        backNt:'#141414',
        backLightNt:'#eee9e9',
        redNt:'#dc1a27',
        redLightNt:'#eb767e',
        whiteTnue:'#dddbdb',
        blackSemi:'#010101'
      },
      fontFamily:{
        montserrat:'Montserrat'
      }
    },
  },
  plugins: [],
}

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
        montserrat:'Montserrat',
        unbounded:'Unbounded'
      },
      screens:{
        'mobileM': {'max':'375px'},
        'mobile': {'max':'480px'},
        'tablet': {'max':'640px'},
        'notebookS': {'max':'1024px'},
        'notebook': {'max':'1280px'},
        'desktopMF': {'min':'1400px'},
        'desktopS': {'max':'1400px'},
        'desktop': {'max':'1650px'},
      }
    },
  },
  plugins: [],
}

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'mobile':'320px'
      },
      fontFamily: {
        display: ['Nunito Sans', "sans-serif"],
        text:['Varela Round', "cursive"]
      },
      maxHeight: {
        '128': '32rem',
        'mi-1': '340px',
        'mi-2': '125px',
        'mi-3': '100px',
        'mi-4': '60px',
        'mi-5': '200px'
      },
      maxWidth: {
        'mi-1': '625px',
        'mi-2': '198px',
        'mi-3': '155px',
        'mi-4': '60px',
        'mi-5': '300px'
      },
      width: {
        'body': '990px',
        'i-1': '625px',
        'i-5': '300px',
        'i-2': '198px',
        'i-3': '155px',
        'i-4': '60px'


      },
      height: {
        'i-1': '340px',
        'i-5': '200px',
        'i-2': '125px',
        'i-3': '100px',
        'i-4': '60px',

      }
    },
  },
  plugins: [],
}
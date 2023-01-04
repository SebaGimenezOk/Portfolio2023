/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'xs': '320px',
    },
    
    extend: {},
    fontFamily: {
      signature: ['Great Vibes'],
    }
  },
  plugins: [],
}

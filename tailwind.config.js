/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      borderWidth: {
        '1': '1.5px', // Add 1px border width
      }, 
      height: {
        '571': '360px', 
        '51': '1440px', 
      },
      colors: {
        'custom-blue': '#17C2EC', 
        'grey':'#FFFFFF',
        'light-gray': '#C4C4C4', 
          'dark-grey':  '#fff4',
      }, 
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      boxShadow: {
        'top': '0 -4px 8px rgba(0, 0, 0, 0.2)',
      },
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
        'darkblue':'#0B153C',
        'light-gray': '#C4C4C4', 
        'dark-grey':  '#fff4',
      }, 
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        'custom': '400px', // Add your custom media query here
      },
      fontFamily: {
        
        'netflix-sans': ['Helvetica Neue','Segoe UI','Roboto','Ubuntu','sans-serif', 'Helvetica Neue', 'Segoe UI', 'Roboto', 'Ubuntu', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}

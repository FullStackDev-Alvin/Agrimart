/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxs':'320px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // Custom breakpoints can be added here
    },
 
    extend: {
      colors: {
        primary: '#4CAF50',
        text: '#212121',
        background: '#F5F5F5',
        light: '#F5F5F5'    // Custom light color
      },
    },
  },
  plugins: [],
}

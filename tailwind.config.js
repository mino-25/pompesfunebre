/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2b2b2b',  
        accent: '#0c6c36',   
        third: '#bf121e',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        body: ['"Lato"', 'serif'],
        serif: ['"Playfair Display"', 'serif'],
      },

       keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
      },
    },
  },
  plugins: [],
}


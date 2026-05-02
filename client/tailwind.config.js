/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B', // Romantic pink
        secondary: '#FFA07C', // Light pink
        accent: '#FFBE0B', // Warm yellow
        dark: '#2D1B69', // Deep purple
        light: '#FFF5F5', // Light pink background
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#f2f5f9',
          board: '#ffffff',
          primary: '#1e1e24',
          blue: '#1a73e8',
          pink: '#ff3366',
          gold: '#b06000',
        }
      }
    },
  },
  plugins: [],
}

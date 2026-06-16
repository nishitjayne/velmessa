/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmesa: {
          blue: '#303188',
          yellow: '#E6B222',
          purple: '#6A41FA',
          cyan: '#90E8F8',
          magenta: '#E42EEA',
          pink: '#F6A992',
          background: '#ffffff',
          text: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

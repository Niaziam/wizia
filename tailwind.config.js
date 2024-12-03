// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#002228',
        primary_box: '#07292f',
        secondary: '#0ff1f6',
        text: '#dfe4e4',
        hover: '#4d4d4d',
        dark: '#1f2937',
        light: '#e5e7eb',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}


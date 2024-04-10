/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1a1a1a', // Dark mode background color
          text: '#ffffff', // Dark mode text color
        },
      },
    },
  },
  plugins: [require("daisyui")],
}


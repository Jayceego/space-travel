/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "#800",
          dark_red: "#691819",
          low_dark: "#666",
          gray: "#555",
          dark_gray: "#888",
          dark: "#eee",
        },
      },

      fontFamily: {
        cinzel: ["Cinzel", "serif"],
      },
    },
  },
  plugins: [],
}

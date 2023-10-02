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
          dark: "#0B0D17",
          blue: "#D0D6F9",
          light: "#FFFFFF",
        },
      },

      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow", "sans-serif"],
      },

      fontSize: {
        head1: "150px",
        head2: "100px",
        head3: "56px",
        head4: "32px",
        head5: "28px",
        subhead1: "28px",
        subhead2: "14px",
        navtext: "16px",
      },
    },
  },
  plugins: [],
}

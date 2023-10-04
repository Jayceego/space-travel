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
        },
      },

      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow Condensed", "sans-serif"],
      },

      fontSize: {
        head1: "150px",
        head2: "100px",
        head3: "56px",
        head4: "32px",
        head5: ["28px", "4.72px"],
        subhead1: "28px",
        subhead2: ["14px", "2.35px"],
        navtext: ["16px", "2.7px"],
      },

      backgroundImage: {
        desktop: "url('../images/background-home-desktop.jpg')",
        tablet: "url('../images/background-home-tablet.jpg')",
        mobile: "url('../images/background-home-mobile.jpg')",
      },
    },
  },
  plugins: [],
}

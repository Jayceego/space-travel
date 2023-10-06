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
        barlowC: ["Barlow Condensed", "sans-serif"],
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
        body: "18px",
      },

      backgroundImage: {
        homeDesktop:
          "url('../images/backgrounds/home/background-home-desktop.jpg')",
        homeTablet:
          "url('../images/backgrounds/home/background-home-tablet.jpg')",
        homeMobile:
          "url('../images/backgrounds/home/background-home-mobile.jpg')",
        destinationDesktop:
          "url('../images/backgrounds/destination/background-destination-desktop.jpg')",
        destinationTablet:
          "url('../images/backgrounds/destination/background-destination-tablet.jpg')",
        destinationMobile:
          "url('../images/backgrounds/destination/background-destination-mobile.jpg')",
        crewDesktop:
          "url('../images/backgrounds/crew/background-crew-desktop.jpg')",
        crewTablet:
          "url('../images/backgrounds/crew/background-crew-tablet.jpg')",
        crewMobile:
          "url('../images/backgrounds/crew/background-crew-mobile.jpg')",
        technologyDesktop:
          "url('../images/backgrounds/technology/background-technology-desktop.jpg')",
        technologyTablet:
          "url('../images/backgrounds/technology/background-technology-tablet.jpg')",
        technologyMobile:
          "url('../images/backgrounds/technology/background-technology-mobile.jpg')",
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        default: "#7B61FF",
      },

      width: {
        1: "2rem",
        2: "75%",
      },
      screens: {
        phone: "480px",
        // => @media (min-width: 480px) { ... }
        tablet: "640px",
        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  plugins: [],
};

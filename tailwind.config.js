/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "DM serif Display",
      secondary: "Jost",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ffb823",
          hover: "#ff9808",
        },
        secondary: "#ffffff",
        accent: {
          DEFAULT: "#1d2e28",
          secondary: "#3d5754",
          hover: "#74a087",
        },
      },
      // backgroundImage: {
      //   hero: "url('../assets/assets/hero/bg.png')",
      //   grid: "url('../assets/assets/grid.png')",
      // },
    },
  },
  plugins: [],
};

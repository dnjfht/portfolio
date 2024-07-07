/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#CCE4F0",
        1: "#99C9E2",
      },
      light: {
        text: {
          DEFAULT: "#212529",
          1: "#CED4DA",
        },
        background: {
          DEFAULT: "#ffffff",
          1: "rgba(255,255,255,0.03)",
          2: "rgba(255,255,255,0.2)",
        },
      },
      dark: {
        text: {
          DEFAULT: "#ffffff",
          1: "#D9D9D9",
        },
        background: {
          DEFAULT: "#000000",
          1: "rgba(0,0,0,0.03)",
          2: "rgba(0,0,0,0.2)",
        },
      },
      text: {
        DEFAULT: "#000000",
        1: "#3a3a3a",
        2: "#7c7c7c",
        3: "#b1b1b1",
        4: "#d2d2d2",
      },
    },

    screens: {
      "3sm": "320px",
      "2sm": "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1921px",
    },

    extend: {
      spacing: {
        smContentHeight: "calc(100% - 80px)",
        categoryMenuHeight: "calc(100% - 43px)",
        mainSliderImgHeight: "calc(100vh - 150px)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  darkMode: "class",

  corePlugins: {
    aspectRatio: true,
    lineClamp: true,
  },
};

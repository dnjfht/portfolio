/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#CCE4F0",
        1: "#99C9E2",
        2: "#66ADD3",
        3: "#3392C5",
        4: "#0077B6",
      },
      light: {
        text: {
          DEFAULT: "#212529",
          1: "#CED4DA",
          2: "#868E96",
          3: "#495057",
        },
        background: {
          DEFAULT: "#ffffff",
          1: "#f1f3f5",
          2: "#868E96",
          3: "#495057",
        },
      },
      dark: {
        text: {
          DEFAULT: "#ffffff",
          1: "#D9D9D9",
          2: "#ACACAC",
          3: "#595959",
        },
      },
    },

    extend: {},
  },
  plugins: [],
  darkMode: "class",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/software-edv-design-system/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          a: "#005193",
          b: "#109ECE",
        },
        black: {
          DEFAULT: "#1E1E1E",
        },
        gray: {
          light: "#EBEAEB",
          dark: "#7B7B7A",
          300: "#C6C6C8",
        },
        green: {
          DEFAULT: "#87D37C",
        },
        red: {
          DEFAULT: "#E74C3C",
        },
        white: {
          DEFAULT: "#FCFFFF",
        },
        orange: {
          DEFAULT: "#FFBD3C",
          dark: "#D35400",
        },
      },
      height: {
        "screen-calc": "calc(100vh - 78px)",
      },
      translate: {
        "hide-right": "calc(100% - 384px)",
      },
    },
  },
  plugins: [],
};

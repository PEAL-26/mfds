/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const { colors } = require("../design-system/styles");
const animate = require("tailwindcss-animate");
const forms = require('@tailwindcss/forms')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/software-edv-design-system/dist/**/*.{js,jsx,ts,tsx}",
    "../design-system/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors,
      height: {
        "screen-calc": "calc(100vh - 78px)",
      },
      translate: {
        "hide-right": "calc(100% - 384px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate, forms],
};

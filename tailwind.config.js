const { tailwindConfig } = require('./src/configs');
const forms = require('@tailwindcss/forms')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindConfig, forms],
};

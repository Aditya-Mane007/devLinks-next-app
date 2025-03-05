/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      purplePrimary: "#633cff",
      purpleSecondary: "#beadff",
      purpleTertiary: "#efebff",
      blackPrimary: "#333333",
      blackSecondary: "#737373",
      blackTertiary: "#d9d9d9",
      whitePrimary: "#ffffff",
      whiteSecondary: "#fafafa",
      redPrimary: "#ff3939",
    },
  },
  plugins: [],
};

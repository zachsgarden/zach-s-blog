/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "728px",
        xl: "984px",
        "2xl": "1240px",
      },
    },
    extend: {
      fontFamily: {
        rubik: ["rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};

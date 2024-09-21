/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroImage: "url('../src/assets/cover.svg')",
        offersBg: "url('/src/assets/room7.svg')",
      },
      colors: {
        primary: "#4C4989", 
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

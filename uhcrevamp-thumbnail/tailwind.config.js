/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MinecraftAlt: ["Minecrafter Alt", "sans-serif"],
      },
      colors: {
        yellow: "#dbbf17",
      },
    },
  },
  plugins: [],
};

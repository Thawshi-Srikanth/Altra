/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        burlywood: "rgba(255, 188, 142, 0.7)",
      },

      fontFamily: {
        rosario: ["Rosario", " sans-serif"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 14s linear infinite",
        "infinite-scroll-reverse":
          "infinite-scroll 14s linear infinite reverse",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};

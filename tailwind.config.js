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
        gray: "rgba(255, 255, 255, 0.8)"
      },

      fontFamily: {
        rosario: ["Rosario", " sans-serif"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
        "infinite-scrollMob": "infinite-scrollMob 20s linear infinite",
        "infinite-scroll-reverse": "infinite-scroll 20s linear infinite reverse",

        "infinite-scrollClientle": "infinite-scrollClientle 14s linear infinite",
        "infinite-scrollClientle-reverse": "infinite-scrollClientle 14s linear infinite reverse",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(120)" },
          to: { transform: "translateX(-270%)" },
        },
        "infinite-scrollClientle": {
          from: { transform: "translateX(120)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scrollMob": {
          from: { transform: "translateX(120)" },
          to: { transform: "translateX(-450%)" },
        },
      },
    },
  },
  plugins: [],
};

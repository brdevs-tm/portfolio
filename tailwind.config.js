// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "button-shadow":
          "inset 15px 15px 30px #30308d, inset -15px -15px 30px #5c5cff",
      },
      keyframes: {
        ani: {
          "0%": { maskPosition: "0 0", WebkitMaskPosition: "0 0" },
          "100%": { maskPosition: "100% 0", WebkitMaskPosition: "100% 0" },
        },
        ani2: {
          "0%": { maskPosition: "100% 0", WebkitMaskPosition: "100% 0" },
          "100%": { maskPosition: "0 0", WebkitMaskPosition: "0 0" },
        },
      },
      animation: {
        ani: "ani 0.7s steps(22) forwards",
        ani2: "ani2 0.7s steps(22) forwards",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slide_up: "slide_up 0.5s ease-in-out forwards",
        slide_down: "slide_down 0.25s ease-in-out forwards",
        slide_left: "slide_left 0.5s ease-in-out forwards",
        slide_right: "slide_right 0.5s ease-in-out forwards",
      },
      keyframes: {
        slide_up: {
          "0%": { top: "320px" },
          "100%": { top: "0px" },
        },
        slide_down: {
          "0%": { top: "0px" },
          "100%": { top: "320px" },
        },
        slide_left: {
          "0%": { right: "-200px" },
          "100%": { right: "0px" },
        },
        slide_right: {
          "0%": { left: "-200px" },
          "100%": { left: "0px" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};

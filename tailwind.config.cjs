/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minWidth: {
        "1/2": "50%",
        "1/4": "25%",
      },
      minHeight: {
        "1/2": "50%",
        "1/4": "25%",
      },
      scale: {
        200: "2",
        225: "2.25",
        250: "2.5",
        300: "3",
        350: "3.5",
        400: "4",
      },
    },
  },
  plugins: [],
};

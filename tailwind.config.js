/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      {
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          primary: "#4ade80",
        },
      },
    ],
  },
};

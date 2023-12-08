/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Inter"],
    },
    extend: {
      colors: {
        primary: "#0334f2",
      },
      animation: {
        shake: "shake 0.5s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-gradients")],
};

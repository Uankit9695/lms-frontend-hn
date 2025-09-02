/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import { Line } from "react-chartjs-2";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui", require("@tailwindcss/line-clamp"))],
};

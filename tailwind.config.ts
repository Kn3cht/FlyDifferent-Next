import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      ...colors,
      primary: "#036",
      accent: "#00284d",
      accentOrange: "#ed8005",
      bgLighterBlue: "#07427d",
    },
    extend: {
      zIndex: {
        "60": "60",
        "70": "70",
      },
    },
  },
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pyramid: {
          50: "#fdf8f0",
          100: "#faefd8",
          200: "#f5dbb0",
          300: "#eec07f",
          400: "#e5a04c",
          500: "#dc8429",
          600: "#ce6d1f",
          700: "#ab541b",
          800: "#89431d",
          900: "#6f381a",
          950: "#3c1b0c",
        },
        stone: {
          950: "#0c0a09",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

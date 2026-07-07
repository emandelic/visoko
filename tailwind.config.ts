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
        gold: {
          50:  "#fdf9ee",
          100: "#f8efcc",
          200: "#f1da90",
          300: "#e8c97a",
          400: "#ddb84e",
          500: "#c9a84c",
          600: "#b8922e",
          700: "#9a7a2e",
          800: "#7a5f23",
          900: "#5c4418",
          950: "#2d200a",
        },
        stone: {
          50:  "#f5f0e8",
          100: "#e8e0d0",
          200: "#d0c4aa",
          300: "#b8a882",
          400: "#9a8a64",
          500: "#7a6e52",
          600: "#5c5240",
          700: "#3d3025",
          800: "#2a2118",
          900: "#1a1612",
          950: "#0a0806",
        },
        forest: {
          900: "#1e2d1a",
          800: "#253522",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(to bottom, rgba(10,8,6,0.5) 0%, rgba(10,8,6,0.3) 40%, rgba(10,8,6,0.85) 80%, rgba(10,8,6,1) 100%)",
      },
      animation: {
        "fade-up": "fadeInUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "float": "float 5s ease-in-out infinite",
        "shimmer": "shimmer 4s linear infinite",
        "pulse-ring": "pulse-ring 1.5s ease-out infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":       { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "pulse-ring": {
          "0%":   { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

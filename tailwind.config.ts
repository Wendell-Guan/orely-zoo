import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fff5dc",
        paperDark: "#f5e6b8",
        ink: "#2b2016",
        orange: "#f4a42b",
        orangeDark: "#c98418",
        forest: "#0e3a2f",
        sand: "#cfe7d3",
      },
      fontFamily: {
        display: ["var(--font-fredoka)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        paper: "0 12px 30px rgba(0,0,0,.2)",
      },
    },
  },
  plugins: [],
} satisfies Config;

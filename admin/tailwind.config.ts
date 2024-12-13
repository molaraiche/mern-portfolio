import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-500": "#C4C4C4",
        "grey-50": "#F9F9F9",
        "black-400": "#141414",
      },
      fontFamily: {
        fm: ["var(--font-fm)"],
        quicksand: ["var(--font-quicksand)"],
      },
      screens: {
        xsm: "285px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config;

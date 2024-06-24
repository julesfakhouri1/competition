import type { Config } from "tailwindcss";

const config: Config = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  sans: [
    "Inter",
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "system-ui",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],

  theme: {
    extend: {
      fontFamily: {
        "darker-grotesque": ["var(--font-darker-grotesque)"],
        avenir: ["var(--font-avenir)"],
        playfair: ["var(--font-playfair-display)"],
        hellixregular: ["var(--font-hellix-regular)"],
        hellixmedium: ["var(--font-hellix-medium)"],
      },
      colors: {
        primary: "#74549F",
      },
    },
  },
  plugins: [],
};
export default config;
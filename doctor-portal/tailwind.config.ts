import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2A3D",
          light: "#16405A",
        },
        teal: {
          DEFAULT: "#1B7A72",
          light: "#2A9D93",
        },
        ivory: "#F7F5F0",
        coral: "#E4572E",
        line: "#DDD8CC",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

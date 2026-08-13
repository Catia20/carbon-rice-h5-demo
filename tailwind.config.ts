import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        rice: "#f5f5f0",
        forest: "#1a3c1a",
        leaf: "#2d7a2d"
      },
      boxShadow: {
        soft: "0 4px 18px rgba(26, 60, 26, 0.07)"
      }
    }
  },
  plugins: []
};

export default config;

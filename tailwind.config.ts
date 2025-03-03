import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lavishly: ["var(--font-lavishly)"],
        montserrat: ["var(--font-montserrat)"],
        orbitron: ["var(--font-orbitron)"],
      },
    },
  },
  plugins: [],
};

export default config;

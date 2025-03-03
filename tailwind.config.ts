import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lavishly: ["var(--font-lavishly)"],
        montserrat: ["var(--font-montserrat)"],
        orbitron: ["var(--font-orbitron)"],
        imperial: ["var(--font-imperial)"],
        cookie: ["var(--font-cookie)"],
      },
      animation: {
        aurora: "auroraShift 5s infinite linear",
      },
      keyframes: {
        auroraShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

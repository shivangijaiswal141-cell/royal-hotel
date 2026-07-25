import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0B",
        charcoal: "#151316",
        surface: "#1C191C",
        ivory: "#F4EFE6",
        gold: {
          DEFAULT: "#C9A24B",
          light: "#E4C878",
          dark: "#9C7B2E",
        },
        brass: "#8A7550",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      backgroundImage: {
        "gold-line":
          "linear-gradient(90deg, transparent, #C9A24B 50%, transparent)",
        "gold-radial":
          "radial-gradient(circle at center, rgba(201,162,75,0.15), transparent 70%)",
      },
      boxShadow: {
        gold: "0 0 40px rgba(201,162,75,0.25)",
        card: "0 10px 40px rgba(0,0,0,0.45)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.9s ease forwards",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

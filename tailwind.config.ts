import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1240px" },
    },
    extend: {
      colors: {
        bg: {
          0: "#050816",
          1: "#070B1C",
          2: "#0B1120",
          3: "#111A2E",
        },
        ink: {
          0: "#F5F7FF",
          1: "#C9D2E8",
          2: "#8794B0",
          3: "#5B6685",
        },
        brand: {
          cyan: "#22D3EE",
          blue: "#00D4FF",
          violet: "#8B5CF6",
          magenta: "#E879F9",
          amber: "#FFB547",
        },
        line: {
          DEFAULT: "rgba(255,255,255,.08)",
          strong: "rgba(255,255,255,.14)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grad-aurora":
          "linear-gradient(120deg,#00D4FF 0%,#22D3EE 35%,#8B5CF6 75%,#E879F9 100%)",
        "grad-soft":
          "linear-gradient(180deg,rgba(0,212,255,.18),rgba(139,92,246,.04))",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-slower": "spin 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        ticker: "ticker 50s linear infinite",
        "pin-pulse": "pinPulse 2.4s ease-in-out infinite",
        "pin-ring": "pinRing 2.4s ease-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        ticker: { to: { transform: "translateX(-50%)" } },
        pinPulse: {
          "0%,100%": { transform: "scale(.85)", opacity: ".7" },
          "50%": { transform: "scale(1.15)", opacity: "1" },
        },
        pinRing: {
          "0%": { transform: "translate(-50%,-50%) scale(.4)", opacity: ".8" },
          "100%": { transform: "translate(-50%,-50%) scale(2.5)", opacity: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

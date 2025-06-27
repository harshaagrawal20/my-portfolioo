import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#15141b",
        foreground: "#edecee",
        primary: {
          DEFAULT: "#a277ff",
          foreground: "#15141b",
        },
        secondary: {
          DEFAULT: "#61ffca",
          foreground: "#15141b",
        },
        accent: {
          DEFAULT: "#ffca85",
          foreground: "#15141b",
        },
        destructive: {
          DEFAULT: "#ff6767",
          foreground: "#15141b",
        },
        muted: {
          DEFAULT: "#5d5d7b",
          foreground: "#edecee",
        },
        border: "#1f1d2b",
        input: "#1f1d2b",
        ring: "#a277ff",
        popover: {
          DEFAULT: "#1f1d2b",
          foreground: "#edecee",
        },
        card: {
          DEFAULT: "#211f2a",
          foreground: "#edecee",
        },
        sidebar: {
          DEFAULT: "#1a1822",
          foreground: "#edecee",
          primary: "#a277ff",
          "primary-foreground": "#15141b",
          accent: "#61ffca",
          "accent-foreground": "#15141b",
          border: "#211f2a",
          ring: "#a277ff",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ["Orbitron", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      dropShadow: {
        glow: "0 0 10px rgba(255,255,255,0.25)",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
      },
      animation: {
        typing: "typing 4s steps(30, end), blink .75s step-end infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;

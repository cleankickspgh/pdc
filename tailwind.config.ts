import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pdc: {
          green: "#168447",
          deep: "#073D2B",
          navy: "#102C3A",
          steel: "#39758A",
          mist: "#EEF4F1",
          graphite: "#18231F",
          lime: "#A7D94C",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(7,61,43,.12)",
        "soft-sm": "0 8px 30px rgba(7,61,43,.08)",
      },
      keyframes: {
        spinSlow: { to: { transform: "rotate(360deg)" } },
        pulseSlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "spin-slow": "spinSlow 24s linear infinite",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

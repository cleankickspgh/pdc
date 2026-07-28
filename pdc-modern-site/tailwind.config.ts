import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: {
      pdc: { green: "#168447", deep: "#073D2B", navy: "#102C3A", steel: "#39758A", mist: "#EEF4F1", graphite: "#18231F", lime: "#A7D94C" }
    },
    boxShadow: { soft: "0 24px 80px rgba(7,61,43,.12)" }
  }},
  plugins: []
} satisfies Config;

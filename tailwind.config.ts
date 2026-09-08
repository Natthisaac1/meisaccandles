import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6F1E7",
        sand: "#EBE3D4",
        amber: "#C4A574",
        amberDeep: "#A68456",
        charcoal: "#2C2825",
        ink: "#1C1917"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        brand: "0.22em"
      }
    }
  },
  plugins: []
};

export default config;

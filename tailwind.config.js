/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: { "spin-slow": "spin 3s linear infinite" },
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
      entry: {
        "0%": { transform: "scale(0.5)" },
        "50%": { transform: "scale(1.5)" },
        "100%": { transform: "scale(0.5)", translate: "(-100% -100%)" },
      },
      auto4: {
        "0%": { margin: "0, 0, 0, 0" },
        "20%": { margin: "0, 0, 0, 0" },
        "25%": { margin: "0, 0, 0, -100%" },
        "45%": { margin: "0, 0, 0, -100%" },
        "50%": { margin: "0, 0, 0, -200%" },
        "70%": { margin: "0, 0, 0, -200%" },
        "75%": { margin: "0, 0, 0, -300%" },
        "99%": { margin: "0, 0, 0, -300%" },
        "100%": { margin: "0, 0, 0, 0" },
      },
    },
    animation: {
      wiggle: "wiggle 1s ease-in-out infinite",
      entry: " entry 6s linear infinite",
      auto4: "auto4 6s linear infinite",
    },
  },
  plugins: [],
};

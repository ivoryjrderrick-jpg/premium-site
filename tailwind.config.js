/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui"] },
      colors: {
        brand: {
          900: "#0A0A0B",
          800: "#111113",
          700: "#19191C",
          600: "#232327",
          500: "#2E2E33",
          accent: "#00E5FF"  /* neon cyan accent */
        }
      },
      boxShadow: {
        glow: "0 0 30px rgba(0,229,255,.25)"
      }
    }
  },
  plugins: [],
};

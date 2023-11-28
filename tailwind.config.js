/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-400": "#38FF64",
        "secondary-500": "#005E15",
      },
      backgroundImage: (theme) => ({
        "mobile-home": "url('./assets/HomePage.png')",
      }),
      fontFamily: {
        haskoy: ["Haskoy", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};

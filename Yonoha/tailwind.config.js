/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      base: "270px",
      xs: "350px",
      md_sm: "460px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1480px",
    },
    extend: {
      height: {
        custom: "calc(100vh - 80px)",
      },
      animation: {
        spin: "spin 2s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      colors: {
        textColor: "#B3B3B3",
        htmlColor: "#202020",
        bgColor: "#1F4068",
        bgCard: "#323840",
        logoColor: "#845EC2",
      },
    },
  },
  plugins: [],
};

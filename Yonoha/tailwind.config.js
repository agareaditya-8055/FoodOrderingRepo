/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        htmlColor: "#202020",
        bgColor: "#1F4068",
        bgCard: "#323840",
        logoColor: "#845EC2",
      },
    },
  },
  plugins: [],
};

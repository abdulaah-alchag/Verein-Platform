/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d1d5db",
        secondary: "#f97316",
        tertiary: "#000000",
      },
    },
  },
  plugins: [],
};

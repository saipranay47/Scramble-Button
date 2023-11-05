/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "hnd": ["Helvetica Now Display", "sans"],
      },
    },
  },
  plugins: [],
};

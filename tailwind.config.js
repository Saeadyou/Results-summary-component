/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: { sans: "Hanken Grotesk" },
    extend: {
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};

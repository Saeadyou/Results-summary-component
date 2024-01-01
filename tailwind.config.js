/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx"],
  theme: {
    fontFamily: { sans: "Hanken Grotesk" },
    fontSize: { base: ["18px", "27px"] },
    extend: {
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};

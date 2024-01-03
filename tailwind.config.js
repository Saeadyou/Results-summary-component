/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: "Hanken Grotesk" },
    fontSize: { base: ["18px", "27px"] },

    extend: {
      height: {
        screen: "100dvh",
      },
      colors: {
        // ### Primary
        "Light-red": "hsl(0, 100%, 67%)",
        "Light-red-transparent": "hsla(0, 100%, 67%,0.1)",
        "Orangey-yellow": "hsl(39, 100%, 56%)",
        "Orangey-yellow-transparent": "hsl(39, 100%, 56%,0.1)",
        "Green-teal": "hsl(166, 100%, 37%)",
        "Green-teal-transparent": "hsl(166, 100%, 37%,0.1)",
        "Cobalt-blue": "hsl(234, 85%, 45%)",
        "Cobalt-blue-transparent": "hsl(234, 85%, 45%,0.1)",

        // ## Gradients
        // (background)
        "Light-slate-blue": "hsl(252, 100%, 67%)",
        "Light-royal-blue": "hsl(241, 81%, 54%)",

        // (circle)
        "Violet-blue": "hsla(256, 72%, 46%, 1)",
        "Persian-blue": "hsla(241, 72%, 46%, 0)",

        // ### Neutral
        "Pale-blue": "hsl(221, 100%, 96%)",
        "Light-lavender": "hsl(241, 100%, 89%)",
        "Dark-gray-blue": "hsl(224, 30%, 27%)",
      },
    },
  },
  plugins: [],
};

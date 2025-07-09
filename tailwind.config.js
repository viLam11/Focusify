/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")], 
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fc6343",
          200: "#fc9783",
          300: "#fcac9c",
          400: "#fc4c2d",
          500: "#fc542c"
        }
      }
    },
  },
  plugins: [],
}


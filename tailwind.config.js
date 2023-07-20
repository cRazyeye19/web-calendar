const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
  "maroon"
];

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: [
      ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
      ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
      ...labelsClasses.map((lbl) => `text-${lbl}-400`)
    ],
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        maroon: {
          100: '#FFE5E5', 
          200: '#FFCCCC',
          300: '#FF9999',
          400: '#FF4D4D',
          500: '#FF0000', 
          600: '#E60000',
          700: '#B30000',
          800: '#800000',
          900: '#4D0000'  
        },
      },
      fontFamily: {
        sans: ["Open Sans"]
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}


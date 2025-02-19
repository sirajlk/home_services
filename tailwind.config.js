/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7420",
        secondary: "#b45309",
        text_primary: "#636b78",
        text_hero: "#fff",
        brand: "rgb(220 38 38)",
        white: "#fff",
        primary_background: "#f3f4f6",
        secondary_background: "#2d2d2d",

      },
      fontSize: {
        "size-64": `${64 }px`,
        "size-34": `${34 }px`,
        "size-40": `${40 }px`,
        "size-48": `${48 }px`,
        "size-20": `${20 }px`,
        "size-24": `${24 }px`,
        "size-28": `${28 }px`,
        "size-18": `${18 }px`,
        "size-16": `${16 }px`,
        "size-14": `${14 }px`,
      },
      fontFamily: {
        comforter: ["Comforter\\ Brush", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        unlock: ["Unlock", "serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
// import img from "./src/assets/two.JPG"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    backgroundImage : {
      "hero" : `url("./src/assets/two.JPG")`
    }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Josefin: ["Josefin\\ Sans", "sans-serif"],
        Inclusive: ["Inclusive\\ Sans", "sans-serif"]
      },
  },
  plugins: [],
}

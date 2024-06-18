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
      extend: {
        gridTemplateColumns: {
          'custom': '0.88fr 0.4fr 0.6fr 0.5fr',
          'custom-lg': '0.8fr 0.5fr',
        }
      }
  },
  plugins: [],
  darkMode: 'selector',
}

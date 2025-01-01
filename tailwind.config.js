/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Midnight-Gray":"#34353a",
        "Apricot":"#ffc86b"
      },
      fontFamily:{
        "Handlee":[`"Handlee"`,"sans-serif"],
        "Poppins":[`"Poppins"`,"sans-serif"]
      }
    },
  },
  plugins: [],
}


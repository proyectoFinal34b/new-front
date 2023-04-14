/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        dashCol: "#A3E3DD",
        buttonCol: "#7eb5b2",
        tableCol: "#158774"
      },
    },
    
  },
  plugins: [],
}


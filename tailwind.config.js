/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'background-main': "require('/main_background.wepg')",
    }},
    colors: {
      'deep-blue': '#02091d',
      'gold': '#ddb758',
      'white': '#fff',
      'black': '#000',
      'gray': 'rgb(107 114 128)',
    },
  },
  plugins: [],
}


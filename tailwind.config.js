/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

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
    screens: {
      'landscapes': {
          'raw': `only screen and (max-height: 600px) and (orientation: landscape)`
      }
  },
    colors: {
      'deep-blue': '#02091d',
      'gold': '#ddb758',
      'white': '#fff',
      'black': '#000',
      'gray': 'rgb(107 114 128)',
      'lightGray': 'rgb(242 242 242)',
      'charcoal': 'rgb(10 20 25)',
      'red': '#F15A24',
      'urlInsta': '#0000EE'
    },
  },
  fontFamily: {
    'sans': ["Monserrat", ...defaultTheme.fontFamily.sans],
    'title': ['Comorant Garamond',],
  },
  plugins: [],
}


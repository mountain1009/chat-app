const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      base: '#ffffff',
      main: '#FF5722',
      accent: '#66BB6A',
    },
    extend: {
      fontFamily: {
        rounded: ['M PLUS Rounded 1c', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

module.exports = {
  darkMode: 'class',
  content: [
    './public/index.html',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

module.exports = {
  darkMode: 'class',
  content: [
    './public/index.html',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

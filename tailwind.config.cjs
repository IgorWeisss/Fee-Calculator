/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx' //Essa linha instrui o tailwind a ser aplicado em todos os .tsx
  ],
  theme: {
    extend: {
      backgroundImage: {
        customCaret: 'url(./src/assets/caret-down.svg)'
      },
      fontFamily: {
        sans: 'Ubuntu, sans-serif'
      }
    },
  },
  plugins: [],
}

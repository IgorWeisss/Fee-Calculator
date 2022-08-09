/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx' //Essa linha instrui o tailwind a ser aplicado em todos os .tsx
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Ubuntu, sans-serif'
      }
    },
  },
  plugins: [],
}

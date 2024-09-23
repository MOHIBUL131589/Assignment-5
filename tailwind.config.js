/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#B4F461',
        secondary: '#1DD100',
        cream: '#F9F7F3',
        button: 'rgba(17, 17, 17, 0.05)',
        black: '#111111',
        paragraph: 'rgba(17, 17, 17, 0.7)',

      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}


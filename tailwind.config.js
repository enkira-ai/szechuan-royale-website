/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        imperial: '#C0181F',
        gold: '#D4A017',
        'bright-gold': '#F5C842',
        ink: '#1A1008',
        parchment: '#FDF6E3',
        jade: '#2E7D4F',
        stone: '#5C5C5C',
        tan: '#E8D5A0',
      },
      fontFamily: {
        serif: ['Noto Serif SC', 'serif'],
        sans: ['Noto Sans SC', 'sans-serif'],
        fell: ['IM Fell English', 'serif'],
      },
    },
  },
  plugins: [],
}
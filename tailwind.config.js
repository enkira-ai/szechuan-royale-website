/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        imperial:  '#CC1100',
        'imperial-dk': '#8B0000',
        gold:      '#D4AF37',
        'gold-bright': '#F0C040',
        'gold-dim': 'rgba(212,175,55,0.3)',
        ink:       '#0d0806',
        'ink-warm': '#1a0e08',
        'ink-light': '#291510',
        cream:     '#F5E6C8',
        stone:     '#8A7968',
        'stone-lt': '#B8A897',
        parchment: '#FDF6E3',
        jade:      '#2E7D4F',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        serif:   ['Noto Serif SC', 'serif'],
        sans:    ['Noto Sans SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

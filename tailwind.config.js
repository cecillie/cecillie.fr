module.exports = {
  content: [
    './layouts/**/*.html.twig',
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto Condensed', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

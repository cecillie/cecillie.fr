module.exports = {
  purge: {
    mode: 'all',
    content: ['./layouts/**/*.html.twig'],
    options: {
      whitelist: [],
    }
  },
  theme: {
    fontFamily: {
      'sans': ['Roboto Condensed', 'sans-serif'],
    },
  },
}

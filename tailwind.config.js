module.exports = {
  purge: {
    enabled: true,
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

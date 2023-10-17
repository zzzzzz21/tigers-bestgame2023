module.exports = {
  files: ['dist/**/*.html', 'dist/**/*.css', 'dist/**/*.js'],
  open: 'external',
  external: true,
  startPath: 'special/tigers-bestgame2023/',
  watch: true,
  server: {
    baseDir: 'dist',
    https: true,
  },
  notify: false,
};

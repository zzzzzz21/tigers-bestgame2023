const path = require("path");

module.exports = {
  entry: {
    draft2023: './src/scripts/draft2023.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/js/special'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}

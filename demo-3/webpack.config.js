const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [{
          // loader: 'kb-webp-loader',
          loader: './img2webp-loader.js',
          options: {
            bin: '/Users/pegasusknight/libwebp/bin/'
          }
        }]
      }
    ]
  }
};

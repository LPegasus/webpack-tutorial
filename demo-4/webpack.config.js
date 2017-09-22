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
          loader: './img2webp-loader.js',
          options: {
            bin: '/Users/pegasusknight/libwebp/bin/'
          }
        }, {
          loader: './dummy-loader.js'
        }]
      }/*,
      {
        test: /\.jpg|png|gif$/,
        use: './dummy-loader.js'
      }
      */
    ]
  }
};

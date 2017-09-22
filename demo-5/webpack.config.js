const path = require('path');

const defaultCfg = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: "web",

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
        }]
      },
      {
        test: /\.jpg$/,
        use: './dummy-loader.js'
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  }
};

module.exports = [defaultCfg,
  Object.assign({}, defaultCfg, { target: 'node', output: {
    filename: 'bundle.node.js',
    path: path.resolve(__dirname, 'dist')
  }})
];

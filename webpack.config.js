var path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },

  module: {
    loaders: [
      { test: /.js$/, loader: 'babel' }
    ]
  },

}

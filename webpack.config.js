module.exports = {
  entry: { app: './src/index.js' },
  output: { path: './dist/', filename: '[name].js' },

  module: {
    loaders: [
      { test: /.js$/, loader: 'babel' }
    ]
  }
}

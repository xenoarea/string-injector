const path = require("path")

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/createInjector.js'),
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'createInjector.js',
    library: 'createInjector',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
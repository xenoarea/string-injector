const path = require("path")

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/createInjector.js'),
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'stringjector.js',
    library: 'stringjector',
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
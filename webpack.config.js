var path = require('path')
var webpack = require('webpack')
var node_module_dir = path.resolve(__dirname, 'node_module')

module.exports = {
  entry: path.resolve(__dirname, './demo/index.js'),
  output: {
    path: path.resolve(__dirname, 'demo'),
  },
  devServer: {
    contentBase: path.join(__dirname, "demo"),
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({__DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV || 'true'))}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: ["babel-loader"],
      include: [path.resolve(__dirname, '/')],
      exclude: [node_module_dir],
    }]
  },
}

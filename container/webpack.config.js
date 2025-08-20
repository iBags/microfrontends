const htmlWebpackPlugin = require("html-webpack-plugin");
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8000
  },
  plugins: [
    new moduleFederationPlugin({
      name: 'container',
      remotes: {
        products: 'products@http://localhost:8001/remoteEntry.js',
      }
    }),
    new htmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}
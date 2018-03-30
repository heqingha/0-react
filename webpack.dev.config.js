const path = require("path");
module.exports = {
  entry: ["react-hot-loader/patch", path.join(__dirname, "src/index.js")],
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader?cacheDirectory=true"],
        include: path.join(__dirname, "src")
      }
    ]
  },
  devServer: {
    port: 8088,
    contentBase: path.join(__dirname, "./dist"),
    historyApiFallback: true,
    host: "0.0.0.0"
  },
  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      component: path.join(__dirname, 'src/component'),
      router:path.join(__dirname, 'src/router')
    }
  }
};

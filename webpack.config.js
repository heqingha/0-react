const merge = require("webpack-merge");

const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require("./webpack.common.config.js");

const publicConfig = {
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ExtractTextPlugin.extract({
        //     fallback: "style-loader",
        //     // use: "css-loader"
        //     use: ["css-loader", "postcss-loader"]
        // })

        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader?modules&localIdentName=[local]-[hash:base64:5]",
            "postcss-loader"
          ]
        })
      }
    ]
  },
  plugins: [
    
    new CleanWebpackPlugin(["dist/*.*"]),
    new UglifyJSPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
  }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new ExtractTextPlugin({
      filename: "[name].[contenthash:5].css",
      // allChunks: true
    })
  ]
};

module.exports = merge(commonConfig, publicConfig);

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { app: "./src/index.tsx" },
  output: {
    filename: "[name].[chunkhash:8].js"
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./tpl/index.html"
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};

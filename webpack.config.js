const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");

module.exports = (env, argv) => ({
  entry: path.resolve(__dirname, "src", "diggerer.tsx"),

  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "src", "template.html")
    })
  ],

  devtool: argv.mode === "production" ? false : "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsConfigPathsPlugin()]
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "awesome-typescript-loader"
          },
          {
            loader: "react-docgen-typescript-loader"
          }
        ]
      }
    ]
  }
});

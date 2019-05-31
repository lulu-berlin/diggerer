const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => ({
  context: process.cwd(),
  entry: path.resolve(__dirname, "src", "diggerer.tsx"),

  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      useTypescriptIncrementalApi: true
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "src", "template.html")
    })
  ],

  devtool: argv.mode === "production" ? false : "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin()]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true
          }
        }
      }
    ]
  }
});

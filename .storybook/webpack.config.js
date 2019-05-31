const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: {
      loader: "ts-loader",
      options: {
        transpileOnly: true
      }
    }
  });
  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.plugins = [new TsconfigPathsPlugin()];
  config.devtool = "source-map";
  return config;
};

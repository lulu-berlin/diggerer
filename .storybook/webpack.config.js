const path = require("path");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
const SRC_PATH = path.join(__dirname, "../src");
//dont need stories path if you have your stories inside your //components folder

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
    use: [
      {
        loader: "awesome-typescript-loader",
        options: {
          configFileName: "./.storybook/tsconfig.json"
        }
      },
      {
        loader: "react-docgen-typescript-loader"
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.plugins = [
    new TsConfigPathsPlugin({
      configFileName: "./.storybook/tsconfig.json"
    })
  ];
  return config;
};

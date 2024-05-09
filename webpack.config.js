import path from "path";
import nodeExternals from "webpack-node-externals";
const __dirname = path.resolve();

export default {
  target: "node",
  entry: "./index.js",
  output: {
    filename: "bundle.cjs",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  externals: [nodeExternals()],

  // Additional configuration goes here
};
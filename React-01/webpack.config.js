const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        enforce: "pre",
        test: /\.json$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "eslint-loader",
            options: {
              eslintPath: path.resolve(__dirname, "src"),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "HP",
      template: "public/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build/public"),
    },
    compress: true,
    port: 9000,
  },
};

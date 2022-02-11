const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {

    // Entry point that indicates where
    // should the webpack starts bundling
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // checks for .js or .jsx files
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
            },
            {
                test: /\.scss$/, //checks for .scss files
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },

    // Options for resolving module requests
    // extensions that are used
    resolve: { extensions: ["*", ".js", ".jsx"] },

    // Output point is where webpack should
    // output the bundles and assets
    output: {
        path: path.resolve(__dirname, "dist/"),
        // publicPath: "/dist/",
        filename: "bundle.js",
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html'
    }),
    new ESLintPlugin()
    ],
};

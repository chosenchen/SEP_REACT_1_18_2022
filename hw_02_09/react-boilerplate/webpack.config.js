//To set up the babel-loader and make it work as a web pack loader

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            // Add HTML loader to serve HTML files.
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    mode: "development",
    // Call the Plugin here.
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
};
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },           
            },
            // add SCSS/CSS loader
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [                  
                    'style-loader',  // create 'style' nodes from JS strings                  
                    'css-loader', // translate CSS into CommonJS                
                    'sass-loader'  // compiles Sass to CSS
                ],
            },
            // add html loader to server HTML files
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

    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html'})
    ]
}


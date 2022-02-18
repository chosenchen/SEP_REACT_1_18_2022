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
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                    }                   
                },           
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [                  
                    'style-loader',  // create 'style' nodes from JS strings                  
                    'css-loader', // translate CSS into CommonJS                
                    'sass-loader'  // compiles Sass to CSS
                ],
            }

            // {
            //     enforce: "pre",
            //     test: /\.json$/,
            //     exclude: /node_modules/,
            //     use: [
            //         {
            //             loader: "eslint-loader",
            //             options: {
            //                 eslintPath: path.resolve(__direname, "src"),
            //             }
            //         }
            //     ]
            // }
        ]
    },

    // Call the plugins
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html'})
    ],
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, "build/public"),
    //     },
    //     compress: true,
    //     port: 9000
    // }
}


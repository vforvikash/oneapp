// webpack.config.js

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return {
            mode,
            entry: "./src/index.js",
            devServer: {
                hot: true,
                open: true
            },
            output: {
                publicPath: "/",
                path: path.resolve(__dirname, "../target/classes/public"),
                filename: "bundle.js"
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
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
                      }
                ]
            },
            plugins: [
                /*
                new CopyPlugin({
                    patterns: [
                      { from: path.resolve(__dirname, 'src', 'assets'), to: path.resolve(__dirname, '../target/classes/public', 'assets') },
                    ],
                  }),
                  */
                new HtmlWebpackPlugin({
                    template: "./public/index.html"
                }),
                new webpack.HotModuleReplacementPlugin()
            ]
        }

};
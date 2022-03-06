const path = require("path");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// No support for webpack 5 at the moment

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    mode: "production",
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devtool: "source-map",
    devServer: {
        watchFiles: path.join(__dirname, "public"),
        historyApiFallback: true
    }
}
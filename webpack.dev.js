const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: 'development',
    optimization: {
        usedExports: true
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true,
        allowedHosts: [],
        proxy: {
            // '/api': {
            //     target: 'http://localhost:3000',
            //     pathRewrite: {'^/api' : ''}
            // },
            // '/api': {
            //     target: 'https://a.b.com/',
            //     secure: false,
            //     changeOrigin: true,
            // }
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },
});

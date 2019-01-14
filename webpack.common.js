const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     publicPath: '/',
    //     filename: '[name].[contenthash].js',
    //     chunkFilename: '[name].[contenthash].js',
    // },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        // options: {
                        //     presets: ['@babel/preset-react', '@babel/preset-env'],
                        //     plugins: [
                        //         ['@babel/plugin-proposal-decorators', { legacy: true }],
                        //         '@babel/plugin-syntax-dynamic-import'
                        //     ]
                        // }
                    }
                ]
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 modules: true,
            //                 localIdentName: '[path][name]__[local]--[hash:base64:5]'
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'main',
            template: 'index.html'
        })
    ]
};

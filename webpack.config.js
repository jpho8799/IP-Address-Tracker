
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    devServer: {
        static: './dist',
    },

    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            
        ],
    },
    plugins: [
        new HtmlWebpackPlugin ({
            title: 'To Do List',
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new Dotenv()
    ]


};
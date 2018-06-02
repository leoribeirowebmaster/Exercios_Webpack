const webpack = require('webpack')
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './ex/index.js', // ponto de entrada
    output: {
        path: __dirname + '/public', // ponto de saida
        filename: './bundle.js' //arquivo de saida
    },
    devServer: {
        port: 8080, // porta do servidor de desenvolvimento
        contentBase: './public'
    },
    plugins: [
        new extractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: extractTextPlugin.extract('style-loader', 'css-loader')
        }]
    }
}
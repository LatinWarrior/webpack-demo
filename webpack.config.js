var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
    context: path.resolve('js'),
    // entry: ['./utils', './app'],
    entry: {
        about: './about-page.js',
        home: './home-page.js',
        contact: './contact-page.js'
    },
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        // filename: 'bundle.js'
        filename: '[name].js'   // name of output file will match the key in the entry object.
    },
    plugins: [commonsPlugin],
    devServer: {
        contentBase: 'public'
    },
    //watch: true,
    module: {
        preloaders: [
            {
                test: /\.js$/,
                exclude: 'node_modules',
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    }
}
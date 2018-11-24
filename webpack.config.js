const path = require('path');

module.exports = {
    entry: {
        app: ['@babel/polyfill', './src/app.js']        
    },

    output: {
        path: path.resolve(__dirname, './public/scripts'),
        filename: '[name]-bundle.js'
    },

    module: {        
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },

    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        publicPath: '/scripts/'
    },

    devtool: 'source-map'
}
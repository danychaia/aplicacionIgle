var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: {
        "app": "./app_Info/main",
        "Inf": "./app_Info/IngresoForm/IngresoForm.component"//,

    },
    //watch: true,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name]_bundle.js"
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        loaders: [
            // ts-loader: convert typescript (es6) to javascript (es6),
            // babel-loader: converts javascript (es6) to javascript (es5)
            {
                'test': /\.tsx?$/,
                'loaders': ['babel-loader', 'ts-loader'],
                'exclude': [/node_modules/, nodeModulesPath]
            },
            // babel-loader for pure javascript (es6) => javascript (es5)
            {
                'test': /\.(jsx?)$/,
                'loaders': ['babel-loader'],
                'exclude': [/node_modules/, nodeModulesPath]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ names: ['Inf'], minChunks: 3 })
    ],
    devServer: {
        inline: true,
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
};
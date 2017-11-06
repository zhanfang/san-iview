var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'san-iview.js',
        library: 'san-iview',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        san: {
            root: 'san',
            commonjs: 'san',
            commonjs2: 'san',
            amd: 'san'
        }
    },
    plugins: [
        // @todo
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
});

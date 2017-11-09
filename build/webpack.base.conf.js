/**
 * @file webpack base
 * @author zhanfang(fzhanxd@gmail.com)
 */
const webpack = require('webpack');
const path = require('path');
const config = require('../config');
const utils = require('./utils');
const projectRoot = path.resolve(__dirname, '../');
const stylus = require('stylus');

function plugin() {
    return style => {
        style.define('url', stylus.resolver());
    };
}

module.exports = {
    entry: {
        index: './src/index/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.san'],
        alias: {
            src: path.resolve(__dirname, '../src'),
            assets: path.resolve(__dirname, '../src/assets'),
            lib: path.resolve(__dirname, '../src/lib'),
            components: path.resolve(__dirname, '../src/index/components'),
            config: path.resolve(__dirname, '../src/index/config'),
            code: path.resolve(__dirname, '../src/index/code'),
        }
    },
    module: {
        rules: [
            {
                test: /\.san$/,
                loader: 'san-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader',
                    {
                        loader: 'stylus-loader',
                        options: {
                            use: [plugin()]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(eot|ttf|otf|svg|woff)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    name: '[name].[hash:7].[ext]',
                    outputPath: utils.assetsPath('fonts/'),
                    publicPath: process.env.NODE_ENV === 'production' ? '/' : utils.assetsPath('fonts/')
                }
            }
        ]
    }
};

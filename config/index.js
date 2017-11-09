/**
 * @file config
 * @author efe
 */
var path = require('path');

module.exports = {
    build: {
        env: require('./prod.env'),
        dist: path.resolve(__dirname, '../'),
        assetsRoot: path.resolve(__dirname, '../'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        bundleAnalyzer: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8011, // can be overwritten by process.env.HOST, if port is in use, a free one will be determined
        
        env: require('./dev.env'),

        assetsSubDirectory: 'dev',
        assetsPublicPath: '/',
        proxyTable: {},
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false,
        // Various Dev Server settings
        autoOpenBrowser: true,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    }
};

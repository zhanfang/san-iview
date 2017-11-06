/**
 * 公共配置
 */
var path = require('path');
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

const stylus = require('stylus');

function plugin() {
    return style => {
        style.define('url', stylus.resolver());
    };
}

module.exports = {
    // 加载器
    module: {
        // https://doc.webpack-china.org/guides/migrating/#module-loaders-module-rules
        rules: [
            {
                test: /\.san$/,
                loader: 'san-loader'
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
                test: /\.js$/,
                loader: 'babel-loader', exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader'
                ]
            },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
    },
    resolve: {
        extensions: ['.js', '.san'],
        alias: {
            view: path.resolve(__dirname, '../src/view')
        }
    }
};

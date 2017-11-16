const path = require('path');
const merge = require('webpack-merge')// webpack 配置合并插件
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf')// webpac基本配置

module.exports = merge(baseWebpackConfig, {
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../'),
        }),
        new UglifyJSPlugin({
            sourceMap: true
        })
    ],
});
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');// webpack 配置合并插件
const utils = require('./utils');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');// webpac基本配置
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 提取 css 的插件
// https://github.com/webpack-contrib/extract-text-webpack-plugin
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// webpack 优化压缩和优化 css 的插件
// https://github.com/NMFR/optimize-css-assets-webpack-plugin
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    module: {
        // styleLoaders
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true,
        }),
    },
    plugins: [
        // 清空文件夹的插件
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../'),
        }),
        // 压缩 js
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true,
            },
            sourceMap: true,
        }),
        new webpack.DefinePlugin({
            'process.env': config.build.env,
        }),
        /* 抽取出chunk的css */
        new ExtractTextPlugin({
            filename: 'static/css/[hash:7].css',
            ignoreOrder: true,
        }),
        // 压缩提取出来的 css
        // 可以删除来自不同组件的冗余代码
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin(),
        // 分割公共 js 到独立的文件
        // https://webpack.js.org/guides/code-splitting-libraries/#commonschunkplugin
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'static/js/vendor.[chunkhash].js',
            minChunks: 3,
        }),
        // 将 webpack runtime 和模块清单 提取到独立的文件，以防止当 app 包更新时导致公共 jsd hash 也更新
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor'],
        }),
    ],
});
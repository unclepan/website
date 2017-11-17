const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');// webpack 配置合并插件
const utils = require('./utils');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');// webpac基本配置
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    module: {
        // styleLoaders
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true,
        }),
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../'),
        }),
        new UglifyJSPlugin({
            sourceMap: true,
        }),
        new webpack.DefinePlugin({
            'process.env': config.build.env,
        }),
    ],
});
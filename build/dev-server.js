const webpack = require('webpack');
const merge = require('webpack-merge');// webpack 配置合并插件
const utils = require('./utils');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');// webpac基本配置

module.exports = merge(baseWebpackConfig, {
    module: {
        // styleLoaders
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap }),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env,
        }),
    ],
});
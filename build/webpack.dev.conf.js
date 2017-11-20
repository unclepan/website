const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');// webpack 配置合并插件
const utils = require('./utils');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');// webpac基本配置

module.exports = merge(baseWebpackConfig, {
    devtool: 'eval-source-map',
    module: {
        // styleLoaders
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap }),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env,
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: config.dev.port,
        host: config.dev.host,
        open: config.dev.autoOpenBrowser,
        overlay: {
            warnings: true,
            errors: true,
        },
    },
});
const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config');
const utils = require('./utils');
const absolutePath = require('./path.config.js');

//入口entry
const globInstanceEntry = new glob.Glob('*(pages|components)/!(_)*/page.js', {
    cwd: utils.resolve('src'), // 在src目录里的pages和components目录下找
    sync: true, // 这里不能异步，只能同步
});
let configEntry = {}; 
globInstanceEntry.found.forEach((page) => {// 生成入口entry
    const e = page.split('/')[1];
    configEntry[e] = utils.resolve('src/' + page); 
});

// 多页面设置
const globInstanceHtml = new glob.Glob('!(_)*', {
    cwd: utils.resolve('src/pages'), // 在pages目录里找
    sync: true,
});
let configPlugins = [];
// 生成导出的模板
globInstanceHtml.found.forEach((page) => {
    const htmlPlugin = new HtmlWebpackPlugin({
        filename: `${page}.html`,
        template: path.resolve(utils.resolve('src/pages'), `./${page}/template.ejs`),
        hash: true, // 为静态资源生成hash值
        xhtml: true,
    });
    configPlugins.push(htmlPlugin);
});

module.exports = {
    entry: configEntry,
    output: {
        // 编译输出的路径
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: utils.assetsPath('js/[name][hash].js'),   // [name]表示entry每一项中的key，用以批量指定生成后文件的名称
    },
    performance: {
        hints: 'error',
        maxEntrypointSize: 6000000, //此选项根据入口起点的最大体积，控制 webpack 何时生成性能提示。
        maxAssetSize: 6000000, //资源(asset)是从 webpack 生成的任何文件。此选项根据单个资源体积，控制 webpack 何时生成性能提示。
    },
    module: {
        rules: [
            {
                test: /\.ejs$/,
                loader: 'underscore-template-loader',
            },
            {
                // 审查 js 文件
                // https://github.com/MoOx/eslint-loader
                test: /\.js$/,
                // 表示预先处理
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    emitError: true,
                    formatter: require('eslint-friendly-formatter'),
                },
            },
            {
                // 编译 js
                // https://github.com/babel/babel-loader
                test: /\.js$/,
                include: utils.resolve('src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        cacheDirectory: true,
                        plugins: ['transform-runtime'],
                    },
                },
            },
            {
                // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
                // 如下配置，将小于8192byte的图片转成base64码
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                include: utils.resolve('src'),
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: utils.assetsPath('img/[hash:7].[ext]'),
                },
            },
            {
                // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
                test: /\.(woff|woff2|svg|otf|eot|ttf)\??.*$/,
                include: utils.resolve('src'),
                loader: 'file-loader',
                options: {
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.css', '.json'],
        alias: absolutePath,
    },
    plugins: [
        ...configPlugins,
        // 配合CLI的，一出error就终止webpack的编译进程
        new webpack.NoEmitOnErrorsPlugin(),
        // https://doc.webpack-china.org/plugins/provide-plugin/
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery',
        }),
    ],
};

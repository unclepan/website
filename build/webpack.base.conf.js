var path = require('path');
var glob = require('glob');
var utils = require('./utils');

// 提取 css 的插件
// https://github.com/webpack-contrib/extract-text-webpack-plugin
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var options = {
    cwd: utils.resolve('src/pages'), // 在pages目录里找
    sync: true, // 这里不能异步，只能同步
};
var globInstance = new glob.Glob('!(_)*/!(_)*', options); // 考虑到多个页面共用HTML等资源的情况，跳过以'_'开头的目录
var configEntry = {};
globInstance.found.forEach((page) => {
    configEntry[page] = path.resolve(utils.resolve('src/pages'), page + '/page');
});


module.exports = {
    entry: configEntry,
    output: {
        path: utils.resolve('dist'),
        publicPath: '/',
        filename: '[name]/entry.[chunkhash].js',    // [name]表示entry每一项中的key，用以批量指定生成后文件的名称
        chunkFilename: '[id].[chunkhash].bundle.js',
    },
    devtool: 'source-map',
    performance: {
        hints: 'error',
        maxEntrypointSize: 6000000, //此选项根据入口起点的最大体积，控制 webpack 何时生成性能提示。
        maxAssetSize: 6000000, //资源(asset)是从 webpack 生成的任何文件。此选项根据单个资源体积，控制 webpack 何时生成性能提示。
    },
    module: {
        rules: [
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
                    name: 'static/img/[hash:7].[ext]',
                },
            },
            {
                // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
                test: /\.(woff|woff2|svg|otf|eot|ttf)\??.*$/,
                include: utils.resolve('src'),
                loader: 'file-loader',
                options: {
                    name: 'static/fonts/[name].[hash:7].[ext]',
                },
            },
            
        ],
    },
    plugins: [
        /* 抽取出chunk的css */
        new ExtractTextPlugin({
            filename: 'static/css/[hash:7].css',
            ignoreOrder: true,
        }),
    ],
};

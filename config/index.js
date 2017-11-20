//该文件在很多文件中都用到，是主要的配置文件，包含静态文件的路径、是否开启sourceMap等。其中，分为两个部分dev（开发环境的配置）和build（生产环境的配置）。
// 详情见文档：https://vuejs-templates.github.io/webpack/env.html
var path = require('path');

module.exports = {
    // production 生产环境
    build: {
        // 构建环境
        env: require('./prod.env'),
        // 构建输出的静态资源路径
        assetsRoot: path.resolve(__dirname, '../dist'),
        // 构建发布的根目录，可配置为资源服务器域名或 CDN 域名
        assetsPublicPath: '/',
        // 构建输出的二级目录
        assetsSubDirectory: 'static',
        // 是否开启 cssSourceMap
        productionSourceMap: true,
    },
    // dev 开发环境
    dev: {
        // 构建环境
        env: require('./dev.env'),
        // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
        assetsPublicPath: '/',
        assetsSubDirectory: 'static',
        // 端口号
        port: 9000,
        host:'localhost',
        // 是否自动打开浏览器
        autoOpenBrowser: true,
    },
};

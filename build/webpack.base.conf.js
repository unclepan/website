var path = require('path');
var glob = require('glob');
var options = {
    cwd: path.resolve(__dirname, '../src/pages'), // 在pages目录里找
    sync: true, // 这里不能异步，只能同步
  };
var globInstance = new glob.Glob('!(_)*/!(_)*', options); // 考虑到多个页面共用HTML等资源的情况，跳过以'_'开头的目录
var configEntry = {};
globInstance.found.forEach((page) => {
    configEntry[page] = path.resolve(path.resolve(__dirname, '../src/pages'), page + '/page');
});
console.log(configEntry);

module.exports = {
    entry: configEntry,
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name]/entry.[chunkhash].js',    // [name]表示entry每一项中的key，用以批量指定生成后文件的名称
        chunkFilename: '[id].[chunkhash].bundle.js',
    },
    devtool: 'source-map',
}

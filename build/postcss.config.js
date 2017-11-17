var precss = require('precss');
var autoprefixer = require('autoprefixer');
module.exports = function postcss() {
    return [precss, autoprefixer({ // precss 允许在 CSS 中使用类似 SASS 的语法
        remove: false,
        browsers: ['ie >= 8', '> 1% in CN'],//“ie>=8”表示 IE > 8，“> 1%” 表示全球使用率大于 1%的浏览器版本
    })];
};

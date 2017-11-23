var path = require('path');

const staticRootDir = path.resolve(__dirname, '../'); // 项目根目录
const srcRootDir = path.resolve(staticRootDir, './src'); // 项目业务代码根目录
const pagesDir = path.resolve(srcRootDir, './pages'); // 存放各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
const publicDir = path.resolve(srcRootDir, './components'); // 存放组件
const logicDir = path.resolve(srcRootDir, './common'); // 存放各个页面使用到的公共资源
const libsDir = path.resolve(srcRootDir, './assets');  // 静态资源
const configDir = path.resolve(staticRootDir, './config'); // 存放配置文件

module.exports = {
    staticRootDir,
    srcRootDir,
    pagesDir,
    publicDir,
    logicDir,
    libsDir,
    configDir,
};


## 注意
本项目基于`webpack3`版本。

## 项目介绍
本项目是一个基于webpack3架构的**web app**脚手架，其特点如下：
- 前端多页项目工程，适用于需要后端渲染的中小型展示型站点
- 引入pages和component的概念，方便多页面对布局、组件的复用，只需了解ejs模版引擎使用方法，即可轻松上手
- 编译后的程序不依赖于外部的资源（包括css、font、图片等资源都做了迁移），更改配置也可以整体放到CDN上。
- 不含Js框架（jQuery不算框架，谢谢）。
## 使用说明

- clone项目
```
git clone git@github.com:unclepan/website.git
```

- 本项目使用包管理工具NPM，因此需要先把本项目所依赖的包下载下来：
```
$ npm install
```

- 启动服务器，推荐直接使用webpack-dev-server
```
$ npm run dev
```

- 编译项目
```
$ npm run build
```

- 理论上来说，webpack-dev-server会自动帮你打开浏览器并展示示例页面；如果没有的话，请自行配置config参数autoOpenBrowser为true，指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，页可在config中配置，其他参数请参考里面的注释。

## CLI命令(npm scripts)
| 命令            | 作用&效果          |
| --------------- | ------------- |
| npm run build   | 根据`webpack.prod.conf.js`，编译出一份生产环境的代码 |
| npm run dev     | 根据`webpack.dev.conf.js`，开启webpack-dev-server并自动打开浏览器，自动监测源码变动并实现Hot Module Replacement，**推荐实际开发时使用此项** |
| npm run stats   | 根据`webpack.prod.conf.js`，在根目录生成stats.json得到项目依赖的统计信息，可视化工具：http://webpack.github.io/analyse/ 或者 https://chrisbateman.github.io/webpack-visualizer/ 或者 https://alexkuz.github.io/webpack-chart/ 或者 自行谷歌。当你优化包输出的大小，这些工具是非常重要的。官方工具有很多的功能，但即使是简单的可视化也可以揭示问题点。|

## 目录结构说明
```
├─build # 生产环境的webpack配置文件夹
│   ├─postcss.config.js # postcss插件的配置等
│   ├─utils.js # 基础的工具函数
│   ├─webpack.base.conf.js # 开发环境和生产环境的公用webpack配置文件。
│   ├─webpack.dev.conf.js # 开发环境webpack配置文件，使用webpack-dev-server启动
│   └─webpack.prod.conf.js # 生产环境webpack配置文件。
├─config # 基础的配置参数文件夹
│   ├─dev.env.js # 开发环境。
│   ├─index.js # 配置参数
│   └─prod.env.js # 生产环境。
├─node_modules # 利用npm管理的所有包及其依赖
├─.eslintrc # ESLint的配置文件
├─package.json # npm的配置文件
├─.gitignore # git的配置文件
├─src # 当前项目的源码
    ├─pages # 各个页面，如入口文件、只有该页面使用到的css、模板文件等
    ├─components # 组件，可以是纯HTML，也可以包含js/css/image等，看自己需要
    ├─assets # 公用的图片资源
    └─common # 各个页面使用到的公共资源
```

## 更新日志
暂无更新

### 1.0.0
版本号为1.0.0
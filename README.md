## 介绍：
基于webpack搭建的一个小项目（第2版），会有插件以及loader的配置

## 环境搭建：
```
npm init //初始化项目
npm install webpack-cli webpack -D
npm run prod //打包

```

### 什么是webpack?
webpack是一个模块打包工具，可以把引用的文件打包到一起

### 可以支持多模块语法吗:
是的，支持 ES Module模块引入方式，CommonJs 模块引入规范，还支持CMD,AMD,支持任何模块引入的语法

### 配置文件的作用是什么:
可以简化运行的操作，让webpack知道入口文件是哪个，可以配置打包生成的文件名和所在位置，可以根据复杂度来进行相关配置

### 什么是loader
就是一个打包的方案，webpack本身对一些文件是不知道如何处理的，但是loader知道

webpack默认可以打包js，但是其他的他不知道该如何打包，比如css,png等静态资源，所以需要借助loader

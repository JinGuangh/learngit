// 此文件是create-react-app创建的工程提供的一个代理网络请求文件入口
// 此文件给nodejs调用，模块化要使用commonjs
// 修改此文件需要重启项目
// 实现代理需要安装 代理中间件模块 yarn add -D http-proxy-middleware
const { createProxyMiddleware: proxy } = require('http-proxy-middleware')

const homeMockFn = require('../mock/home')

// // 内置了express
module.exports = app => {
  homeMockFn(app)
  // 参数1：以什么规则开头
  // app.use('/api', proxy({
  //   // 目标地址
  //   target: 'http://localhost:9000',
  //   // 修改主机头
  //   changeOrigin: true,
  //   pathRewrite: {
  //     '^/api': ''
  //   }
  // }))
}




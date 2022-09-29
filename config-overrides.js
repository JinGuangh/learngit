// 增量配置当前项目中的webpack配置，建议在react18中不要用
// 建议在react18中也不要用装饰器
// override 方法，如果webpack中有此配置则，覆盖，如果没有则添加
const path = require('path')
const { addDecoratorsLegacy, override, addWebpackAlias, fixBabelImports } = require('customize-cra')

// 自定义
const customConfig = () => config => {
  config.resolve.alias['@'] = path.resolve('src')
  return config
}


// 追加上一个装饰器
module.exports = override(
  addDecoratorsLegacy(),
  // addWebpackAlias({
  //   '@': path.resolve('src')
  // }),
  customConfig(),
  // 按需要加载css,无用的css在打包时,不会打包到项目中
  fixBabelImports('import', { libraryName: "antd-mobile", style: "css" })
)

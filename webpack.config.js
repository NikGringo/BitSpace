// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展
let path = require("path");
module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.output.path = path.join(__dirname, '/dist');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
    style: 'css',
  }]);

  return webpackConfig;
};

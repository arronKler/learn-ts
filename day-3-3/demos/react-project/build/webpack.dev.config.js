module.exports = {
  devtool: "cheap-module-eval-source-map"
  /* 
  cheap 忽略列信息
  module 定位到ts源码，而非js
  eval-source-map 以dataURI的形式打包到文件中，重编译速度更快
   */
};

// 一个全局类库案例
function globalLib(options) {
  console.log(options);
}

globalLib.version = "1.0.0";

globalLib.doSome = function() {
  console.log("globalLib doSome");
};

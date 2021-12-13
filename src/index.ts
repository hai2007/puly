class ThreeManager {



}


// 对外暴露调用接口

if (typeof module === "object" && typeof module.exports === "object") {
  module.exports = ThreeManager
} else {
  window['ThreeManager'] = ThreeManager
}

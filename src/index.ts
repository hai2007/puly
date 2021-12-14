import Geometry from './interfaces/Geometry'
import Light from './interfaces/Light'
import Camera from './interfaces/Camera'

class Puly {

  // 几何体
  private geometry: Array<Geometry>

  // 光照
  private light: Array<Light>

  // 相机
  private camera: Camera

  constructor() {

  }

  // 绘制
  draw() {

  }

}

// 对外暴露调用接口

if (typeof module === "object" && typeof module.exports === "object") {
  module.exports = Puly
} else {
  window['Puly'] = Puly
}

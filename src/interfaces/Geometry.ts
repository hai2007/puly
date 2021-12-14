import { Figure } from '../enum/Figure'

// 几何体
export default interface Geometry {

  // 形状
  figure: Figure

  // 尺寸
  size: Array<number>

  // 颜色
  color: string

  // 透明度
  alpha: number

  // 纹理或贴图
  texture: any

}
import { LightType } from "../enum/LightType";

// 光
export default interface Light {

  // 光的颜色
  color: string

  // 光的类型
  type: LightType

  // 光的位置
  position?: Array<number>

  // 光的方向
  direction?: Array<number>

}
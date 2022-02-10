import image3DCode from 'image3d/build/image3D-core'
import Matrix4 from '@hai2007/tool/Matrix4'
import xhtml from '@hai2007/browser/xhtml'
import formatColor from '@hai2007/browser/formatColor.js'
import ThreeGeometry from 'three-geometry'

import Options from './interfaces/Options'
import Light from './interfaces/Light'

class Puly {

    // 三维画笔核心
    private __core: image3DCode

    // 几何体
    private __geometry: Array<any>

    // 光照
    private __light: Array<Light>

    // 相机
    private __camera: Matrix4

    // 几何体
    private __ThreeGeometry: ThreeGeometry

    constructor(options: Options) {

        // 核心画笔
        this.__core = image3DCode(options.el)
        this.__core.shader(`
    attribute vec4 a_position;
    uniform mat4 u_matrix;
    void main(){
        vec4 temp = u_matrix * a_position;

        // 表示眼睛距离vec4(0.0,0.0,1.0)的距离
        float dist = 2.0;

        // 使用投影直接计算
        // 此处要注意z轴承显示和实际的方向是相反的
        gl_Position = vec4((dist + 1.0) * temp.x / (dist + temp.z), (dist + 1.0) * temp.y / (dist + temp.z), temp.z, 1.0);
    }
    `, `
    precision mediump float;
    uniform vec4 u_color;
    void main(){
        gl_FragColor=u_color;
    }
    `)

        let size = xhtml.size(options.el)

        // 几何体
        this.__geometry = []
        this.__ThreeGeometry = ThreeGeometry({
            precision: Math.max(size.width, size.height) * 0.02
        })

        // 光照
        this.__light = []

        // 相机
        this.__camera = Matrix4()

        let _size = size.width > size.height ? size.width : size.height

        // 相机应用压缩空间矩阵
        this.__camera.multiply([
            2 / _size, 0, 0, 0,
            0, 2 / _size, 0, 0,
            0, 0, -2 / _size, 0,
            0, 0, 0, 1
        ])

    }

    /**
     * -------------------------------
     * 几何相关
     * -------------------------------
    */

    geometry(options) {

        this.__geometry.push(options)
        let index = this.__geometry.length - 1, _this = this
        return {

            // 修改值
            setValue(attrs) {
                for (let key in attrs) {
                    _this.__geometry[index][key] = attrs[key]
                }
            }

        }

    }

    /**
     * -------------------------------
     * 相机相关
     * -------------------------------
    */

    rotate(deg, a1, b1, c1, a2, b2, c2) {
        this.__camera.rotate(-1 * deg, a1, b1, c1, a2, b2, c2)
        return this
    }

    scale(xTimes, yTimes, zTimes, cx, cy, cz) {
        this.__camera.scale(xTimes, yTimes, zTimes, cx, cy, cz)
        return this
    }

    move(dis, a, b, c) {
        this.__camera.move(-1 * dis, a, b, c)
        return this
    }

    /**
     * -------------------------------
     * 光照相关
     * -------------------------------
    */

    // todo

    // 绘制
    draw() {

        let painter = this.__core.painter()
        let buffer = this.__core.buffer()

        // 开启深度
        painter.openDeep()

        // 设置相机
        this.__core.setUniformMatrix4fv('u_matrix', this.__camera.value())

        // 一个个绘制几何体
        for (let geometry of this.__geometry) {

            // 设置几何体的颜色
            let colorArray = formatColor(geometry.color)
            this.__core.setUniform4f('u_color', colorArray[0] / 255, colorArray[1] / 255, colorArray[2] / 255, colorArray[3])

            // 准备好参数
            let args = []
            switch (geometry.type) {
                case "cylinder": {
                    args = [geometry.x, geometry.y, geometry.z, geometry.radius, geometry.height]
                    break
                }
                case "prism": {
                    args = [geometry.x, geometry.y, geometry.z, geometry.radius, geometry.height, geometry.num]
                    break
                }
                case "sphere": {
                    args = [geometry.cx, geometry.cy, geometry.cz, geometry.radius]
                    break
                }
            }

            // 启动绘制
            this.__ThreeGeometry[geometry.type](data => {

                // 通过缓冲区把数据传递给GPU
                buffer.write(new Float32Array(data.points)).use('a_position', 3, 3, 0)

                // 调用具体的方法绘制
                if (data.methods == 'StripTriangle') {
                    painter.stripTriangles(0, data.length)
                } else if (data.methods == 'FanTriangle') {
                    painter.fanTriangles(0, data.length)
                }

            }, ...args)

        }
    }

}

// 对外暴露调用接口

if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = Puly
} else {
    window['Puly'] = Puly
}

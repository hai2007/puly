import sizeType from '../types/size'
import optionType from '../types/option'
import themeType from '../types/theme'

import xhtml from "@hai2007/browser/xhtml"
import observeResize from './observeResize'
import formatTheme from './formatTheme'
import merge from './merge'
import calc from './calc'
import image3D from 'image3d'
import viewHandler from '@hai2007/browser/viewHandler.js'
import { isBoolean } from '@hai2007/tool/type'

import shaderVertex from './shader-vertex'
import shaderFragment from './shader-fragment'

class Puly {

    private size: sizeType
    private canvas: Element

    private image3d: any
    private painter: any
    private buffer: any
    private camera: any

    private doDraw: Function = null

    private static charts: any = {}
    private option: optionType = {}

    // 主题
    private static theme: themeType

    constructor(el: Element) {

        // 获取绘制区域大小
        this.size = xhtml.size(el)

        // 追加画布
        this.canvas = xhtml.append(el, "<canvas width='" + this.size.width + "' height='" + this.size.height + "'>非常抱歉，您的浏览器不支持canvas!</canvas>")

        this.image3d = new image3D(this.canvas, {
            "vertex-shader": shaderVertex,
            "fragment-shader": shaderFragment,
            "depth": true
        })

        this.painter = this.image3d.Painter()
        this.buffer = this.image3d.Buffer()
        this.camera = this.image3d.Camera({
            size: 4,

            // 默认的时候，Z轴承的方向是朝里的，这里进行了校对
            // https://hai2007.gitee.io/image3d/index.html#/api?fixed=camera-set
            proof: true
        }).rotateBody(-0.5, 1, 0, 0).rotateBody(0.2, 0, 0, 1).rotateBody(0.5, -1, 1, -1)

        // 设置点光源的颜色和位置
        this.image3d.setUniformFloat("u_LColor", 1, 1, 1, 1)
        this.image3d.setUniformFloat("u_LPosition", -5, 5, 5)

        // 监听绘制区域大小改变
        observeResize(el, () => {

            // todo

        })

        // 鼠标键盘交互
        // 每次调整的弧度
        let deg = 0.1
        let rateScale = 1

        viewHandler(data => {

            if (this.doDraw == null) return

            /*
             * 修改相机
             */

            // 键盘控制
            if (data.type == 'lookUp') {
                this.camera.rotateBody(deg, 1, 0, 0)
            } else if (data.type == 'lookDown') {
                this.camera.rotateBody(deg, -1, 0, 0)
            } else if (data.type == 'lookLeft') {
                this.camera.rotateBody(deg, 0, 1, 0)
            } else if (data.type == 'lookRight') {
                this.camera.rotateBody(deg, 0, -1, 0)
            }

            // 鼠标拖动或手指控制
            else if (data.type == 'rotate') {
                this.camera.rotateBody(deg * data.dist * 0.07, ...data.normal)
            }

            // 滚轮控制
            else if (data.type == 'scale') {

                // 设置一个缩放上界
                if (data.kind == 'enlarge' && rateScale >= 2) {
                    return
                }

                let baseTimes = 0.899

                let times = data.kind == 'enlarge' ? 2 - baseTimes : baseTimes
                rateScale *= times

                this.camera.scaleBody(times, times, times, 0, 0, 0)
            }

            // 重新绘制
            this.doDraw()
        })

    }

    // 设置主题
    static registerTheme(theme: themeType) {
        Puly.theme = formatTheme(theme)
    }

    // 注册图表
    static registerChart(name: string, calcFun: Function) {
        if (name in Puly.charts) {
            throw new Error('This chart is already defined:' + name)
        }
        Puly.charts[name] = calcFun
    }

    // 设置用户意图
    // 我们根据这个配置进行分析后绘制
    setOption(option: optionType) {

        this.option = merge(this.option, option)

        let geometrys = []

        if ('series' in this.option) {
            for (let series of this.option.series) {

                try {

                    let result = Puly.charts[series.type]({
                        data: series.data || this.option.data || [],
                        itemStyle: series.itemStyle || {}
                    }, {
                        color: (index: number) => {
                            return Puly.theme.colors[index % Puly.theme.colors.length]
                        }
                    })

                    for (let geometry of result.geometry) {
                        geometrys.push(geometry)
                    }

                } catch (e) {
                    console.warn("[puly warn]Chart '" + series.type + "' not defined")
                }

            }
        }

        let temp = calc(geometrys, this.option)
        this.doDraw = () => {

            // 传递照相机
            this.image3d.setUniformMatrix("u_matrix", this.camera.value())

            for (let geometry of temp.geometry) {
                let data = geometry.data

                this.buffer.write(new Float32Array(data.points)).use('a_position', 3, 6, 0).use('a_normal', 3, 6, 3)
                this.image3d.setUniformFloat("u_color", geometry.color[0], geometry.color[1], geometry.color[2], geometry.color[3])
                this.painter["draw" + data.methods](0, data.length)
            }

            if (!('xAxis' in this.option) || (isBoolean(this.option.xAxis.show) && this.option.xAxis.show)) {

                // 绘制x坐标轴
                this.buffer.write(new Float32Array([
                    -1.3, 0, 0, 0, 0, 1, 1.3, 0, 0, 0, 0, 1,
                    1.25, 0.02, 0.02, 0, 0, 1,
                    1.25, -0.02, 0.02, 0, 0, 1,
                    1.25, -0.02, -0.02, 0, 0, 1,
                    1.25, 0.02, -0.02, 0, 0, 1,
                    1.25, 0.02, 0.02, 0, 0, 1,
                ])).use('a_position', 3, 6, 0).use('a_normal', 3, 6, 3)

                this.image3d.setUniformFloat("u_color", 1, 0, 0, 1)

                this.painter.drawLine(0, 2).drawFanTriangle(1, 6)

            }

            if (!('yAxis' in this.option) || (isBoolean(this.option.yAxis.show) && this.option.yAxis.show)) {

                // 绘制y坐标轴
                this.buffer.write(new Float32Array([
                    0, -1.3, 0, 0, 0, 1, 0, 1.3, 0, 0, 0, 1,
                    0.02, 1.25, 0.02, 0, 0, 1,
                    -0.02, 1.25, 0.02, 0, 0, 1,
                    -0.02, 1.25, -0.02, 0, 0, 1,
                    0.02, 1.25, -0.02, 0, 0, 1,
                    0.02, 1.25, 0.02, 0, 0, 1,
                ])).use('a_position', 3, 6, 0).use('a_normal', 3, 6, 3)

                this.image3d.setUniformFloat("u_color", 0, 1, 0, 1)

                this.painter.drawLine(0, 2).drawFanTriangle(1, 6)

            }

            if (!('zAxis' in this.option) || (isBoolean(this.option.zAxis.show) && this.option.zAxis.show)) {

                // 绘制z坐标轴
                this.buffer.write(new Float32Array([
                    0, 0, -1.3, 0, 0, 1, 0, 0, 1.3, 0, 0, 1,
                    0.02, 0.02, 1.25, 0, 0, 1,
                    -0.02, 0.02, 1.25, 0, 0, 1,
                    -0.02, -0.02, 1.25, 0, 0, 1,
                    0.02, -0.02, 1.25, 0, 0, 1,
                    0.02, 0.02, 1.25, 0, 0, 1,
                ])).use('a_position', 3, 6, 0).use('a_normal', 3, 6, 3)

                this.image3d.setUniformFloat("u_color", 0, 0, 1, 1)

                this.painter.drawLine(0, 2).drawFanTriangle(1, 6)

            }
        }

        this.doDraw()

    }

}

// 挂载内置图表
import charts from './charts/index'
for (let key in charts) {
    Puly.registerChart(key, charts[key])
}

// 设置好主题色
Puly.registerTheme({
    "colors": ["#c12e34", "#e6b600", "#0098d9", "#2b821d", "#005eaa", "#339ca8", "#cda819", "#32a487"]
});

// 对外暴露调用接口

if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = Puly
} else {
    window['Puly'] = Puly
}

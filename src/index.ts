import sizeType from '../types/size'
import optionType from '../types/option'
import themeType from '../types/theme'

import xhtml from "@hai2007/browser/xhtml"
import observeResize from './observeResize'
import formatTheme from './formatTheme'
import merge from './merge'
import calc from './calc'

class Puly {

    private size: sizeType
    private canvas: Element

    private static charts: any = {}
    private option: optionType = {}

    // 主题
    private static theme: themeType

    constructor(el: Element) {

        // 获取绘制区域大小
        this.size = xhtml.size(el)

        // 追加画布
        this.canvas = xhtml.append(el, "<canvas width='" + this.size.width + "' height='" + this.size.height + "'>非常抱歉，您的浏览器不支持canvas!</canvas>")

        // 监听绘制区域大小改变
        observeResize(el, () => {

            this.size = xhtml.size(el)
            this.canvas.setAttribute('width', "" + this.size.width)
            this.canvas.setAttribute('height', "" + this.size.height)

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

                let result = Puly.charts[series.type]({
                    data: series.data
                }, {
                    color: (index: number) => {
                        return Puly.theme.colors[index % Puly.theme.colors.length]
                    }
                })

                for (let geometry of result.geometry) {
                    geometrys.push(geometry)
                }

            }
        }

        console.log(calc(geometrys, this.option))

    }

}

// 对外暴露调用接口

if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = Puly
} else {
    window['Puly'] = Puly
}

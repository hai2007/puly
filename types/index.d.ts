import themeType from './theme'

declare class Puly {

    /**
     * 构造函数
     */
    constructor(el: Element | null)

    /**
     * 设置主题
     */
    static registerTheme(theme: themeType)

    /**
     * 注册图表
     * @param name 图表名称
     * @param calcFun 图表生成函数
     */
    static registerChart(name: string, calcFun: Function)

}

export default Puly

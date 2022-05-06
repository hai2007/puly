export default interface option {

    xAxis?: {
        type?: string,
        data?: Array<string | number>,
        show?: boolean
    },

    yAxis?: {
        type?: string,
        data?: Array<string | number>,
        show?: boolean
    },

    zAxis?: {
        type?: string,
        data?: Array<string | number>,
        show?: boolean
    },

    data?: any

    series?: Array<any>

}

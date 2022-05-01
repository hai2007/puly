export default interface option {

    xAxis?: {
        type?: string,
        data?: Array<string | number>
    },

    yAxis?: {
        type?: string,
        data?: Array<string | number>
    },

    zAxis?: {
        type?: string,
        data?: Array<string | number>
    },

    series?: Array<any>

}
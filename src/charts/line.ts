import { isArray } from '@hai2007/tool/type'

export default (params, api) => {

    let data = []
    if (isArray(params.data[0])) {
        for (let i = 0; i < params.data[0].length; i++) {
            let _data = []
            for (let j = 0; j < params.data.length; j++) {
                _data.push(params.data[j][i])
            }
            data.push(_data)
        }
    } else {
        data.push(params.data)
    }

    let geometry = []
    for (let j = 0; j < data.length; j++) {

        let points = []
        for (let i = 0; i < data[j].length; i++) {

            points.push([
                i + 0.5 - data[j].length * 0.5,
                data[j][i]
            ])

        }

        geometry.push({
            type: "item",
            name: "lines",
            points,
            color: api.color(j)
        })
    }

    return {
        geometry
    }

}

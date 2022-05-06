import { isArray } from '@hai2007/tool/type'

export default (params, api) => {

    let data = params.data

    params.itemStyle = params.itemStyle || {}

    let geometry = []
    for (let i = 0; i < data.length; i++) {

        if (isArray(data[i])) {

            for (let j = 0; j < data[i].length; j++) {

                let smallWidth = 0.7 / data[i].length

                geometry.push({
                    type: "item",
                    name: "cuboid",
                    length: data[i][j],
                    start: params.itemStyle.align == 'middle' ? data[i][j] * 0.5 : 0,
                    index: i + 0.5 - data.length * 0.5 + (j - data[i].length * 0.5) * smallWidth,
                    size: smallWidth,
                    color: api.color(j)
                })

            }

        } else {

            geometry.push({
                type: "item",
                name: "cuboid",
                length: data[i],
                start: params.itemStyle.align == 'middle' ? data[i] * 0.5 : 0,
                index: i + 0.5 - data.length * 0.5,
                size: 0.7,
                color: params.itemStyle.colors ? api.color(i) : api.color(0)

            })

        }
    }

    return {
        geometry
    }

}

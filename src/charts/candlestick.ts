export default (params, api) => {

    let data = params.data
    let geometry = []

    for (let i = 0; i < data.length; i++) {

        // 红涨绿跌
        geometry.push({
            type: "item",
            name: "cuboid",
            length: data[i][1] - data[i][0],
            start: data[i][0],
            index: i + 0.5 - data.length * 0.5,
            size: 0.7,
            color: data[i][0] > data[i][1] ? [0, 1, 0, 1] : [1, 0, 0, 1]
        })

        // 最值
        geometry.push({
            type: "item",
            name: "lines",
            points: [
                [
                    i + 0.5 - data.length * 0.5,
                    data[i][2]
                ], [
                    i + 0.5 - data.length * 0.5,
                    data[i][3]
                ]
            ],
            color: data[i][0] > data[i][1] ? [0, 1, 0, 1] : [1, 0, 0, 1]
        })

    }

    return {
        geometry
    }

}

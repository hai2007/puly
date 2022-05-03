import optionType from '../types/option'

import ThreeGeometry from 'three-geometry'

export default (geometrys: Array<any>, option: optionType) => {

    let threeGeometry = ThreeGeometry({

        // 待定，实际需要动态计算
        precision: 1
    })

    // 坐标值分量最大
    let maxValue = 0

    // 坐标刻度分量最大
    let maxLabel = 0

    for (let geometry of geometrys) {

        // 条目
        if (geometry.type == 'item') {

            // 长方体
            if (geometry.name == 'cuboid') {

                let value = Math.abs(geometry.start + geometry.length)
                let label = Math.max(Math.abs(Math.ceil(geometry.index + geometry.size * 0.5)), Math.abs(Math.floor(geometry.index - geometry.size * 0.5)))

                maxValue = Math.max(maxValue, value)
                maxLabel = Math.max(maxLabel, label)

            }

        }

    }

    let geometryArray = []

    for (let geometry of geometrys) {

        // 条目
        if (geometry.type == 'item') {

            // 长方体
            if (geometry.name == 'cuboid') {

                threeGeometry.prism(function (data) {

                    geometryArray.push({
                        data,
                        color: geometry.color
                    })

                }, geometry.index / maxLabel, geometry.start / maxValue, 0, 1 / maxLabel * geometry.size / 2, geometry.length / maxValue, 4);

            }

        }

    }

    return {
        geometry: geometryArray
    }

}

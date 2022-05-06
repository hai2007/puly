import optionType from '../types/option'

import ThreeGeometry from 'three-geometry'
import formatColor from './formatColor'

export default (geometrys: Array<any>, option: optionType) => {

    let threeGeometry = ThreeGeometry({

        // 待定，实际需要动态计算
        precision: 0.1,

        normal: true
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

            // 连线组
            else if (geometry.name == 'lines') {
                for (let point of geometry.points) {

                    let value = Math.abs(point[1])
                    let label = Math.ceil(Math.abs(point[0]))

                    maxValue = Math.max(maxValue, value)
                    maxLabel = Math.max(maxLabel, label)

                }
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

            // 连线组
            else if (geometry.name == 'lines') {

                let points = []
                for (let point of geometry.points) {
                    points.push(point[0] / maxLabel, point[1] / maxValue, 0, 0, 0, 1)
                }

                geometryArray.push({
                    data: {
                        length: geometry.points.length,
                        methods: "StripLine",
                        points
                    },
                    color: geometry.color
                })

            }

        }

        // 原生方法
        else if (geometry.type == 'native') {

            geometryArray.push({
                data: {
                    length: geometry.points.length / 6,
                    methods: geometry.methods,
                    points: geometry.points
                },
                color: formatColor(geometry.color)
            })
        }

        // 几何
        else if (geometry.type == 'geometry') {

            threeGeometry[geometry.name](data => {

                geometryArray.push({
                    data,
                    color: formatColor(geometry.color)
                })

            }, ...geometry.params)

        }

    }

    return {
        geometry: geometryArray
    }

}

import optionType from '../types/option'

export default (geometrys: Array<any>, option: optionType) => {

    // 坐标值分量最大
    let MaxValue = {
        xAxis: 0,
        yAxis: 0,
        zAxis: 0
    }

    // 坐标刻度分量最大
    let MaxLabel = {
        xAxis: 0,
        yAxis: 0,
        zAxis: 0
    }

    for (let geometry of geometrys) {

        // 条目
        if (geometry.type == 'item') {

            // 长方体
            if (geometry.name == 'cuboid') {

                let value = Math.abs(geometry.start + geometry.length)
                let label = Math.max(Math.abs(Math.ceil(geometry.index + geometry.size * 0.5)), Math.abs(Math.floor(geometry.index - geometry.size * 0.5)))


                for (let axisName of ['xAxis', 'yAxis', 'zAxis']) {
                    if (axisName in option) {

                        // 值
                        if (option[axisName].type == 'value') {
                            MaxValue[axisName] = Math.max(MaxValue[axisName], value)
                        }

                        // 刻度
                        else if (option[axisName].type == 'category') {
                            MaxLabel[axisName] = Math.max(MaxLabel[axisName], label)
                        }
                    }
                }

            }

        }

    }



    console.log(geometrys, option, MaxValue, MaxLabel)

}

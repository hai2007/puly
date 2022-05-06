import formatColor from '@hai2007/browser/formatColor'
import { isArray } from '@hai2007/tool/type'

export default function (color) {

    if (isArray(color)) return color

    let _color = formatColor(color)
    return [
        _color[0] / 255,
        _color[1] / 255,
        _color[2] / 255,
        _color[3],
    ]

}

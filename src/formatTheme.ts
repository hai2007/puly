import themeType from '../types/theme'

import formatColor from '@hai2007/browser/formatColor'

export default (theme: themeType): themeType => {

    let _theme = {
        colors: []
    }

    if ('colors' in theme) {
        for (let color of theme.colors) {
            let _color = formatColor(color)
            _theme.colors.push([
                _color[0] / 255,
                _color[1] / 255,
                _color[2] / 255,
                _color[3],
            ])
        }
    }

    return _theme

}

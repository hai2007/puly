import themeType from '../types/theme'

import formatColor from './formatColor'

export default (theme: themeType): themeType => {

    let _theme = {
        colors: []
    }

    if ('colors' in theme) {
        for (let color of theme.colors) {
            _theme.colors.push(formatColor(color))
        }
    }

    return _theme

}

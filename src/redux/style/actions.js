import { CHANGE_FONT_COLOR, CHANGE_BG_COLOR, CHANGE_FONT_STYLE, CHANGE_FONT_SIZE } from './types';

export const changeFontColor = (color) => {
    return {
        type: CHANGE_FONT_COLOR,
        payload: color
    }
}

export const changeBgColor = (color) => {
    return {
        type: CHANGE_BG_COLOR,
        payload: color
    }
}

export const changeFontStyle = (style) => {
    return {
        type: CHANGE_FONT_STYLE,
        payload: style
    }
}

export const changeFontSize = (size) => {
    return {
        type: CHANGE_FONT_SIZE,
        payload: size
    }
}
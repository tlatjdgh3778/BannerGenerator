// sizing module
// ducks pattern 

// types
export const CHANGE_FONT_COLOR = 'CHANGE_FONT_COLOR'
export const CHANGE_BG_COLOR = 'CHANGE_BG_COLOR'
export const CHANGE_FONT_STYLE = 'CHANGE_FONT_STYLE'
export const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE'


// actions 
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

// reducer
const initialState = {
    fontColor: '#000',
    bgColor: '#C2B7DA',
    fontStyle: 'Do Hyeon',
    fontSize: '40',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FONT_COLOR:
            return {
                ...state,
                fontColor: action.payload
            }
        case CHANGE_BG_COLOR:
            return {
                ...state,
                bgColor: action.payload
            }
        case CHANGE_FONT_STYLE:
            return {
                ...state,
                fontStyle: action.payload
            }
        case CHANGE_FONT_SIZE:
            return {
                ...state,
                fontSize: action.payload
            }
        default:
            return state
    }
}

export default reducer;
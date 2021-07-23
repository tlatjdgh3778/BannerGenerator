import { CHANGE_FONT_COLOR, CHANGE_BG_COLOR, CHANGE_FONT_STYLE, CHANGE_FONT_SIZE } from './types';

const initialState = {
    fontColor: '#000',
    bgColor: '#C2B7DA',
    fontStyle: 'Do Hyeon',
    fontSize: '40',
}

export const styleReducer = (state = initialState, action) => {
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
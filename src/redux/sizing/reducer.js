// reducer
import { RESIZE_HEIGHT, RESIZE_WIDTH } from './types'

const initialState = {
    width: 650,
    height: 360
}

export const sizingReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESIZE_WIDTH:
            return {
                ...state,
                width: action.payload
            }
        case RESIZE_HEIGHT:
            return {
                ...state,
                height: action.payload
            }
        default:
            return state
    }
}
// sizing module
// ducks pattern

// types
export const RESIZE_WIDTH = 'sizing/RESIZE_WIDTH';
export const RESIZE_HEIGHT = 'sizing/RESIZE_HEIGHT';

// actions
export const resizeWidth = (width) => {
    return {
        type: RESIZE_WIDTH,
        payload: width
    }
} 

export const resizeHeight = (height) => {
    return {
        type: RESIZE_HEIGHT,
        payload: height
    }
} 

// reducer
const initialState = {
    width: 650,
    height: 360
}

const reducer = (state = initialState, action) => {
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

export default reducer;
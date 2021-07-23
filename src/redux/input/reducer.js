import { ADD_INPUT_TEXT } from './types';

const initialState = {
    text: "Sample Text🎨", 
}

export const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INPUT_TEXT:
            return {
                ...state,
                text: action.payload
            }
        default:
            return state
    }
}
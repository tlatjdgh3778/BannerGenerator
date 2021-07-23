import { ADD_INPUT_TEXT } from './types';

export const addInputText = (text) => {
    return {
        type: ADD_INPUT_TEXT,
        payload: text
    }
}
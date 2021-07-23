import { RESIZE_HEIGHT, RESIZE_WIDTH } from './types'

// action creator, return action
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
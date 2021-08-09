// sizing module
// ducks pattern
import produce from "immer"; // 불변성 관리 라이브러리

// types
export const RESIZE_WIDTH = "sizing/RESIZE_WIDTH";
export const RESIZE_HEIGHT = "sizing/RESIZE_HEIGHT";

// actions
export const resizeWidth = (width) => {
    return {
        type: RESIZE_WIDTH,
        payload: width,
    };
};

export const resizeHeight = (height) => {
    return {
        type: RESIZE_HEIGHT,
        payload: height,
    };
};

// reducer
const initialState = {
    width: 650,
    height: 360,
};

export default function reducer(state = initialState, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case RESIZE_WIDTH:
                draft.width = action.payload;
                break;
            case RESIZE_HEIGHT:
                draft.height = action.payload;
                break;
            default:
                break;
        }
    });
}

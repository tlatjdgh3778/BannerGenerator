// sizing module
// ducks pattern
import produce from "immer"; // 불변성 관리 라이브러리

// types
export const CHANGE_FONT_COLOR = "CHANGE_FONT_COLOR";
export const CHANGE_BG_COLOR = "CHANGE_BG_COLOR";
export const CHANGE_FONT_STYLE = "CHANGE_FONT_STYLE";
export const CHANGE_FONT_SIZE = "CHANGE_FONT_SIZE";

// actions
export const changeFontColor = (color) => {
    return {
        type: CHANGE_FONT_COLOR,
        payload: color,
    };
};

export const changeBgColor = (color) => {
    return {
        type: CHANGE_BG_COLOR,
        payload: color,
    };
};

export const changeFontStyle = (style) => {
    return {
        type: CHANGE_FONT_STYLE,
        payload: style,
    };
};

export const changeFontSize = (size) => {
    return {
        type: CHANGE_FONT_SIZE,
        payload: size,
    };
};

// reducer
const initialState = {
    fontColor: "#000",
    bgColor: "#C2B7DA",
    fontStyle: "Do Hyeon",
    fontSize: "40",
};

export default function reducer(state = initialState, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case CHANGE_FONT_COLOR:
                draft.fontColor = action.payload;
                break;
            case CHANGE_BG_COLOR:
                draft.bgColor = action.payload;
                break;
            case CHANGE_FONT_STYLE:
                draft.fontStyle = action.payload;
                break;
            case CHANGE_FONT_SIZE:
                draft.fontSize = action.payload;
                break;
            default:
                break;
        }
    });
}

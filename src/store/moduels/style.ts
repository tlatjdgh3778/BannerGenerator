// sizing module
// ducks pattern
import produce from "immer"; // 불변성 관리 라이브러리

// types
export const CHANGE_FONT_COLOR = "CHANGE_FONT_COLOR" as const;
export const CHANGE_BG_COLOR = "CHANGE_BG_COLOR" as const;
export const CHANGE_FONT_STYLE = "CHANGE_FONT_STYLE" as const;
export const CHANGE_FONT_SIZE = "CHANGE_FONT_SIZE" as const;

// actions
export const changeFontColor = (color: string) => {
    return {
        type: CHANGE_FONT_COLOR,
        payload: color,
    };
};

export const changeBgColor = (color: string) => {
    return {
        type: CHANGE_BG_COLOR,
        payload: color,
    };
};

export const changeFontStyle = (style: string) => {
    return {
        type: CHANGE_FONT_STYLE,
        payload: style,
    };
};

export const changeFontSize = (size: string) => {
    return {
        type: CHANGE_FONT_SIZE,
        payload: size,
    };
};
// 모든 액션 객체들에 대한 타입
type StyleACtion =
    | ReturnType<typeof changeFontColor>
    | ReturnType<typeof changeBgColor>
    | ReturnType<typeof changeFontStyle>
    | ReturnType<typeof changeFontSize>;

// reducer
// 이 모듈에서 사용할 상태 타입 정의
type StyleSate = {
    fontColor: string;
    bgColor: string;
    fontStyle: string;
    fontSize: string;
};

const initialState: StyleSate = {
    fontColor: "#000",
    bgColor: "#C2B7DA",
    fontStyle: "Do Hyeon",
    fontSize: "40",
};

export default function reducer(state: StyleSate = initialState, action: StyleACtion): StyleSate {
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

// sizing module
// ducks pattern
import produce from "immer"; // 불변성 관리 라이브러리

// types
export const RESIZE_WIDTH = "sizing/RESIZE_WIDTH" as const;
export const RESIZE_HEIGHT = "sizing/RESIZE_HEIGHT" as const;

// actions
export const resizeWidth = (width: number) => {
    return {
        type: RESIZE_WIDTH,
        payload: width,
    };
};

export const resizeHeight = (height: number) => {
    return {
        type: RESIZE_HEIGHT,
        payload: height,
    };
};
// 모든 액션 객체들에 대한 타입
type SizingActioin = ReturnType<typeof resizeWidth> | ReturnType<typeof resizeHeight>;

// reducer
// 모듈에서 관리할 상태의 타입
type SizingState = {
    width: number;
    height: number;
};

const initialState: SizingState = {
    width: 650,
    height: 360,
};

export default function reducer(
    state: SizingState = initialState,
    action: SizingActioin
): SizingState {
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

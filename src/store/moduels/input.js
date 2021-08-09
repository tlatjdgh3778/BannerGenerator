// input module
// ducks pattern
// 1. export default a functin called reducer()
// reducer() 라는 이름으로 export default 해준다
// 2. export its action creator as functions
// action creator 함수는 export 해준다
// 3. action types in the form npm-module-or-app/reducer/ACTION_TYPE
// action type 의 이름 규칙을 적용해준다. 프로젝트이름/모듈이름/액션타입
// 4. export its action types as UPPER_SNAKE_CASE
// 액션 타입은 UPPER_SNAKE_CASE 로 export 한다.

import produce from "immer"; // 불변성 관리 라이브러리

// types
// action name 앞에 접두사를 넣어줌.
export const ADD_INPUT_TEXT = "input/ADD_INPUT_TEXT";

// actions
export const addInputText = (text) => {
    return {
        type: ADD_INPUT_TEXT,
        payload: text,
    };
};

// reducer
// reducer라는 이름으로 export default 해준다.

const initialState = {
    text: "Sample Text🎨",
};

export default function reducer(state = initialState, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case ADD_INPUT_TEXT:
                draft.text = action.payload;
                break;
            default:
                break;
        }
    });
}

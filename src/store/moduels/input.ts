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
// as const를 붙여줌으로써 나중에 액션 객체를 만들 때 action.type의 값을 추론하는 과정에서
// action.type이 string 으로 추론되지 않고 'input/ADD_INPUT_TEXT'와 같이 실제 문자열 값으로 추론 되도록 함.
export const ADD_INPUT_TEXT = "input/ADD_INPUT_TEXT" as const;

// actions
export const addInputText = (text: string) => {
    return {
        type: ADD_INPUT_TEXT,
        payload: text,
    };
};

// 모든 액션 객체들에 대한 타입을 준비
// ReturnType<typeof ___>는 특정 함수의 반환값을 추론한다.
// as const를 써줘야 이 부분이 제대로 동작함
type InputActions = ReturnType<typeof addInputText>;

// reducer
// 이 모듈에서 관리할 상태의 타입 선언
type InputState = {
    text: string;
};

const initialState: InputState = {
    text: "Sample Text🎨",
};

// reducer라는 이름으로 export default 해준다.
// 리듀서에서는 state와 함수의 반환값이 일치하도록 작성
// 액션은 InputActions 를 타입으로 설정
export default function reducer(
    state: InputState = initialState,
    action: InputActions
): InputState {
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

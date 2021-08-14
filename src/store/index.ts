// createStore..
// export store
import { createStore } from "redux";
import rootReducer from "./moduels/index";

const store = createStore(rootReducer);

// 루트 리듀서의 반환값을 유추
// 이 타입을 다른 컴포넌트에서 불러와서 사용한다.
export type RootState = ReturnType<typeof rootReducer>;

export default store;

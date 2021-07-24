// createStore..
// export store
import { createStore } from 'redux'
import rootReducer from './moduels/index';

const store = createStore(rootReducer)

export default store;
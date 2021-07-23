import { combineReducers } from 'redux';
import { sizingReducer } from './sizing/reducer';
import { inputReducer } from './input/reducer';

const rootReducer = combineReducers({
    sizing: sizingReducer,
    input: inputReducer,
});

export default rootReducer;
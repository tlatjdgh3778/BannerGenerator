import { combineReducers } from 'redux';
import { sizingReducer } from './sizing/reducer';
import { inputReducer } from './input/reducer';
import { styleReducer } from './style/reducer';

const rootReducer = combineReducers({
    sizing: sizingReducer,
    input: inputReducer,
    style: styleReducer, 
});

export default rootReducer;
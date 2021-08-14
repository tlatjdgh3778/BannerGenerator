// rootReducer
import { combineReducers } from 'redux';
import input from './input';
import sizing from './sizing';
import style from './style';

export default combineReducers({
    input,
    sizing,
    style,
})
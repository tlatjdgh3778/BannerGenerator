import { createStore } from 'redux';

import { inputReducer } from './input/reducer';

const store = createStore(inputReducer);

export default store;

// 1. Create redux store
// import { createStore } from 'redux';
// const store = createStore(reducer);

// 2. provide this store to react app (in App.js)
// import { Provider } from 'react-redux';
// import store from from './redux/store';
// <Provider store={store}> </Provider>

// How to Apply Logger MiddleWare 
// 1. import logger from 'redux-logger'
// 2. import { applyMiddleware } from 'redux'
// 3. const store = create(rootReduer, applayMiddleware(logger))
// 4. 브라우저 콘솔에서 확인
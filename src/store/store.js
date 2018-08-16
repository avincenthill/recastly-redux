import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

const store = createStore(
  rootReducer,
  { videoList: [], currentVideo: null },
  applyMiddleware(thunk)
);
export default store;

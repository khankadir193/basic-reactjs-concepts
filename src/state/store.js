import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Update this line

import index from './reducer/index.js'; // Combine all reducers here

const store = createStore(index,{},applyMiddleware(thunk));

export default store;
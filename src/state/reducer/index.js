import { combineReducers } from "redux";
import {reducer,counterReducer} from "./reducer.js";

const reducers = combineReducers({
    data:reducer,
    counterRedu:counterReducer
});

export default reducers;
import { combineReducers } from "redux";
import reducer from "./reducer.js";

const reducers = combineReducers({
    data:reducer
});

export default reducers;
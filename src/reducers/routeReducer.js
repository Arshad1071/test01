import authReducer from "./authReducer";
import currentReducer from "./currentReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    authReducer,
    currentReducer
});

export default rootReducer;
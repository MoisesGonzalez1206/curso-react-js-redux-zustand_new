import { combineReducers } from "redux";
import { AuthReducer, AuthReducer2 } from "./AuthReducer";

export const rootReducer = combineReducers({
  Auth: AuthReducer, AuthReducer2
  
});


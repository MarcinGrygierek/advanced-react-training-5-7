import { combineReducers } from "redux";
import myNameReducer, { MyNameState } from "./my-name-reducer";

export interface RootState {
    myName: MyNameState
}

export const appReducer = combineReducers({
    myName: myNameReducer
})
import { combineReducers } from "redux";
import person from "./person"
//这个文件主要是用于整合多个reducer的
export const getReducer = () => {
    return combineReducers({person})
}
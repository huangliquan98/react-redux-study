import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getReducer } from '../reducers/index'

//传入的第一个参数为reducer通常为一个对象
export default createStore(getReducer(),applyMiddleware(thunk))
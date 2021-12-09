import { ADD_PERSON } from "../constants/constant";
const initState = [{id:"001",name:"张三",age:18}]
export default function person(preState=initState,action) {
    const {type,data} = action
    switch (type) {
        case ADD_PERSON:
            return [data,...preState]
        default:
            return preState
    }
}
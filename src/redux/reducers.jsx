
import { INCREMENT, DECREMENT} from './action-types.jsx'


export function counter(state = 0, action){

    console.log("counter()", state, action)
   switch(action.type){
       case INCREMENT:
        return state + action.data;
       case DECREMENT:
        return state - action.data;
    default:
        return state;
   }
}

// reducer 的作用就是将旧状态与传过来的数据进行处理,返回新的状态值

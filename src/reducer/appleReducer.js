import {BEGIN_PICK_APPLE,DONE_PICK_APPLE,EATE_APPLE} from '../action/action'
const initState = {
    newAppleId:3,
    appleList:[
        {
            id:0,
            weight:233,
            isEaten:false,
            name:`红苹果 - 1号`
        },{
            id:1,
            weight:255,
            isEaten:true,
            name:`红苹果 - 2号`
        },
        {
            id:2,
            weight:100,
            isEaten:false,
            name:`红苹果 - 3号`
        }
    ]
}
export function appleReducer (state=initState,action){
    let preId = state.newAppleId
    let newList = {
        id:preId,
        weight:action.weight,
        isEaten:false,
        name:`红苹果 - ${preId+1}号`
    }
           switch (action.type){
               case DONE_PICK_APPLE:
                   return {
                       newAppleId:preId+1,
                       appleList:[
                           ...state.appleList,
                           newList
                       ]
                   }
               case EATE_APPLE:
                   console.log(action.index)
                   console.log(state.appleList)
                   return {
                       newAppleId:state.newAppleId,
                       appleList:[
                           ...state.appleList.slice(0,action.index),
                           Object.assign({},state.appleList[action.index],{
                               isEaten:true
                           }),
                           ...state.appleList.slice(action.index+1)
                       ]
                   }
               default:
                   return state
           }
}
  export function donePick  (state=false,action){
            switch (action.type){
                case BEGIN_PICK_APPLE:
                    return action.isPick
                default:
                    return state
            }
}

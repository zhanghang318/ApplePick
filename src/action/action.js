export const BEGIN_PICK_APPLE = 'BEGIN_PICK_APPLE'
export const DONE_PICK_APPLE = 'DONE_PICK_APPLE'
export const EATE_APPLE = 'EATE_APPLE'

export function beginPick(isPick){
    return {
        type:BEGIN_PICK_APPLE,
        isPick
    }
}
export function donePick(weight){
    return {
        type:DONE_PICK_APPLE,
        weight
    }
}
export function eateApple(index){
    return {
        type:EATE_APPLE,
        index
    }
}
export function AppleActionAll  (){
    return (dispatch,getState)=>{
        const {bool}  = getState()
        if(bool){
            return null;
        }
        dispatch (beginPick(true))
        let min = 200+Math.ceil(Math.random()*200)
        setTimeout(()=>{
            dispatch (donePick(min))
            dispatch (beginPick(false))
        },2000)
    }
}





import * as types from './actionTypes';

export function ADD_TODO(payload){
    console.log(payload)
    return{
        type:types.ADD_TODO,
        id:payload.id,
        message:payload.message
    }
}
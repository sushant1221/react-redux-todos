




import * as types from '../actions/actionTypes';


export default function addToDoReducer(state={
    todos: []
},action){
    switch(action.type){
        case types.ADD_TODO :
        console.log(...state.todos);
            return Object.assign({}, state, {
                todos: [
                ...state.todos,
                    {
                        text: action.message,
                        completed: false,
                        id:action.id
                    }
                ]
            })


        default: return state;

    }    
    
}
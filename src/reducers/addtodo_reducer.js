




import * as types from '../actions/actionTypes';


export default function addToDoReducer(state={
    todos: []
},actions){
    switch(actions.type){
        case types.ADD_TODO :
            return Object.assign({}, state, {
                todos: [
                ...state.todos,
                    {
                        text: actions.message,
                        completed: false,
                        id:actions.id
                    }
                ]
            })


        default: return state;

    }    
    
}
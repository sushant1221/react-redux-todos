import { combineReducers } from 'redux';

import addToDoReducer from './addtodo_reducer';


const rootReducer = combineReducers({
    addToDo : addToDoReducer
});


export default rootReducer;
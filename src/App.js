import React, { Component } from 'react';
import './App.css';

//import components
import Addtodo from './components/addToDos';
import Todolist from './components/toDoList';
import Filtertodo from './components/filterToDos';

//import redux
import { createStore } from 'redux';

import { Provider } from 'react-redux'

//import root reducers
import rootReducer from './reducers/index';


const store = createStore(rootReducer);

export default class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <div>
                    <Addtodo />
                    <Todolist />
                    <Filtertodo />
                </div>
            </Provider>
        );
    }
}
import React, { Component} from 'react';

import {connect} from 'react-redux';

 class Todolist extends Component{

    constructor(props){
        super(props);
        console.log(props); 
    }

    render(){
        return(
            <div>
                {this.props.todo_list.todos.map((todo)=>{
                    return <p key={todo.id}>{todo.text}</p>;
                })}
            </div>
        );
    }
}

const mapStateToProps = function(state){
    console.log(state);
    return {
        todo_list:state.addToDo
    }
}


export default connect(mapStateToProps)(Todolist);
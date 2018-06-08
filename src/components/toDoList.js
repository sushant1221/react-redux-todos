import React, { Component} from 'react';

import {connect} from 'react-redux';

 class Todolist extends Component{

    constructor(props){
        super(props);
        console.log(props); 
        // this.toggleToDo = this.toggleToDo.bind(this,i);
    }

    // toggleToDo(i,e){
    //     console.log(e.currentTarget);
    //     console.log(i);
    // }

    render(){
        return(
            <div>
                {this.props.todo_list.todos.map((todo)=>{
                    return <p onClick={()=>this.props.dispatch(console.log(todo.id))} key={todo.id}>{todo.text}</p>;
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
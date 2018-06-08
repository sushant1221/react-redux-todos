import React, { Component } from 'react';
import {connect} from 'react-redux'

import { ADD_TODO } from '../actions/userActions';



class Addtodo extends Component{
    constructor(props){
        super(props);
        this.addToDOs = this.addToDOs.bind(this);
    }

    
    addToDOs(e){
        e.preventDefault();
        console.log(e.target.elements[0].value);
        let id  =  new Date().getUTCMilliseconds();
        //call action creator
        console.log(this.props);
        //push this value into array
        this.props.dispatch(ADD_TODO({id:id,message:e.target.elements[0].value}));
    }

    render(){
        return(
            <div>
                <form onSubmit={this.addToDOs}>
                    <input type="text" name="inputForm"/>
                    <button type='submit'> ADD</button>
                </form>
                
            </div>
        );
    }
}


export default  connect(null)(Addtodo);
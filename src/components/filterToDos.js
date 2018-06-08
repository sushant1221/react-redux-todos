import React, { Component } from 'react';

export default class Filtertodo extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div>
                <p>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </p>
            </div>
        )
    }
}
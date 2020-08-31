import React, { Component } from 'react';
import { createStore } from 'redux';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
let store = createStore(counter)


class About extends Component{

    constructor(props){
        super(props);
        this.state = {num: 0};
    }

    handlePlus = () =>{
        store.dispatch({ type: 'INCREMENT' });
    }

    handleDecrease = () =>{
        store.dispatch({ type: 'DECREMENT' });
    }

    render(){
        
        return(
            <div>
                <h1>This is about us.</h1>
                {store.subscribe(() => this.setState({num: store.getState()}))}
                {this.state.num}
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}

export default About;

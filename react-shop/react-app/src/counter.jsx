import React from 'react';
export default class Counter extends React.Component { 
    constructor() {
        super();

        this.state = {
            value: 0
        };
    } 

    handleIncrement = () => {
       this.setState({value: this.state.value+1})
    }
    handleDecrement = () => {
        if(this.state.value > 0 ) {
            this.setState({value: this.state.value-1})
        }
    }
    render() { 
       return (
       <div>
       { this.state.value }
       <button onClick={this.handleIncrement}>Increment</button>
       <button onClick={this.handleDecrement}>Decrement</button>
       </div>
        );

    }
 }
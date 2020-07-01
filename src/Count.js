import React, { Component } from 'react'

export default class Count extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
        // this.handleIncrement = this.handleIncrement.bind(this);
        // this.handleDecrement = this.handleDecrement.bind(this);
    }
    
    handleIncrement = () => {
        this.setState(
            state => ({
                count: state.count + 1
            })
        )
    }
    handleDecrement = () => {
        this.setState(
            state => ({
                count: state.count - 1
            })
        )
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                
                <button onClick={this.handleIncrement} type='button'>Increment</button>
                <button onClick={this.handleDecrement} type='button'>Decrement</button>         
                
            </div>
        )
    }
}

import React, { Component } from "react";

export class Count extends Component {
    constructor(props) {
        super(props)
        this.state ={
            count: 0
        }
    }

    increment = ()=>{
        this.setState((prev)=>({
            count: prev.count+1
        }))
    }

    decrement = ()=>{
        this.setState((prev)=>({
            count: prev.count -1
        }))
    }
    
    
    render(){
        return <>
            <h1 onClick={this.count}>Counter</h1>
            <button onclick={this.increment}>Increment</button>
            <button onclick={this.decrement}>Decrement</button>
        </>
    }
}
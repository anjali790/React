import React, { Component } from "react";

export class Count extends Component {
    constructor(props) {
        super(props)
<<<<<<< HEAD
        this.state ={
=======
        this.state = {
>>>>>>> d71c78cc669ef59d4b0ed639a4f8b2ca8874d3e1
            count: 0
        }
    }

<<<<<<< HEAD
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
=======
    increment = () => {
        this.setState((prev) => ({
            count: prev.count + 1
        }))
    }

    decrement = () => {
        this.setState((prev) => ({
            count: prev.count - 1
        }))
    }


    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </>
        )
>>>>>>> d71c78cc669ef59d4b0ed639a4f8b2ca8874d3e1
    }
}
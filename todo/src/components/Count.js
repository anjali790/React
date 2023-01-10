import React, { Component } from "react";
export class Count extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

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
    }
}
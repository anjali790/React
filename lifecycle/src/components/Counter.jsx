import React, {Component} from "react";

export class Counter extends Component{
    constructor(props){
        super(props);
        this.state ={
            count: 0,
        }

    }
        increment=()=>{
                this.setState((prev)=>({
                        count: prev.count +1,                   
                }))
            
        }

        decrement=()=>{
            this.setState((prev)=>({
                count:prev.count-2,
            }))
        }


    render(){
        return(
            <>
            <p>{this.state.count}</p>
            <button onClick={this.increment}>increment</button>
            <button onClick={this.decrement}>decrement</button>
            </>
        )
    }
}
import React, {Component} from "react";

export class LifeCycle extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        };

        console.log('initialisation');// it will call only once
    }

    incrementCount = () => {
        this.setState((prev) => ({
            count: prev.count +1,
        }));
    }
    
    

    decrementCount = () => {
        this.setState((prev) =>({
            count: prev.count -1,
        }));
    }

    componentWillMount(){
        console.log('component will mount');
    }

    componentDidMount(){
        console.log('component did mount');
    }
    
    shouldComponentUpdate(){
        console.log('should component update');
        return true;
    }

    componentWillUpdate(){
        console.log('component will update');
    }

    componentDidUpdate(){
        console.log('component did update');
    }

    componentWillUnmount(){
        console.log('component will unmount');
        alert('in unmounting phase');
    }

    render(){
    //    this.setState({count: this.state.count+1 })-------->>>WRONG -> NEVER EVER CHANGE THE STATE INSIDE RENDER METHOD THIS WILL MAKE A INFINTE LOOP
     
        console.log('rendering');
        return(
            <>
            <h1>count- {this.state.count}</h1>
            <button onClick={this.incrementCount}>increment</button>
            <button onClick={this.decrementCount}>decrement</button>
            {this.state.count > 10 && <h1>hello world</h1>}
            </>
        )
    }
}
import React, {Component} from "react";

export class Header extends Component{
    constructor(props){
        super();
    }


    render(){
        return(
            <>
            <header><h1 className="heading">{this.props.name}</h1><h2>React is JS libraray</h2></header>
            </>
        )
    }
}
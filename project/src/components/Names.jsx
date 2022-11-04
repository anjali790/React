import React, { Component } from "react";

export class Names extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "anjali",
        }
    }

    render() {
        return (
            <>
            <p>{this.props.name}</p>
        </>
        )

}
       
    
       
    

}
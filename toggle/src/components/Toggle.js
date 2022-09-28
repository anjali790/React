import React, { Component } from "react";

export class Toggle extends Component {
    //state--> store data inside a variable
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
        }
        // this.handClick = this.handClick.bind(this);
    };


    handleClick = () => {
        console.log(this);
        // this.state.isToggleOn = false;
        this.setState({
            isToggleOn: !this.state.isToggleOn,
        });
    };
    
    
    render() {
        return <button className="toggleBtn" onClick={this.handleClick}>{this.state.isToggleOn ? "ON" : "OFF"}</button>
    };
};
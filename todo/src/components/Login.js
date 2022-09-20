import React, { Component } from "react";

export class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
           userName : "Anjali",
           password : "anjali123",
        }
    }

    

    render(){
        return(
            <>
            <label for="username">Username*</label>
            <input type="text" placeholder="enter username"></input>
            <label for="password">Password*</label>
            <input type="password" placeholder="enter password"></input>
            <button type="submit">Submit</button>
            </>
        )
           
    }
}
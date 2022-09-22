import React, { Component } from "react";
import './Login.css';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }


    handleEmail = (event) =>{
        console.log(event.target.value);
        this.setState({
            username :event.target.value,
        });
    };

    handlePassword = (event) =>{
        console.log(event.target.value);
        this.setState({ 
            password: event.target.value,
        });
    };

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.username, this.state.password);
    }



    render() {
        return (
            <>
                <section className="container">
                    <form>
                        <fieldset>
                            <h1>Login Form</h1>
                            <div className="usernameDiv">
                                <label htmlFor="username" className="input">username* :</label>
                                <input type="text" placeholder="enter username" className="inputName input" id="username" onChange={this.handleEmail} value={this.state.username} required></input>
                            </div>
                            <div className="passwordDiv">
                                <label htmlFor="password" className="input">password* :</label>
                                <input type="text" placeholder="enter password" className="inputPassword input" id="password" onChange={this.handlePassword} value={this.state.password} required></input>
                            </div>
                            <div className="btnDiv">
                                <button className="btn" onChange={this.handleSubmit}>Login</button>
                            </div>
                        </fieldset>
                    </form>
                </section>
            </>
        )
    }
}
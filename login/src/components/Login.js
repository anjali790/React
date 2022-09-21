import React, { Component } from "react";
import './Login.css'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Anjali",
            password: 1234,
        }
    }

    handleClick = () =>{
        if(this.state.username === this.target.value && this.state.password === this.target.value && this.state.value.length <=8){
            alert('Login Successfully');
        }else{
            alert('Invalid details');
        }
    }

    render() {
        return (
            <>
                <section className="container">
                    <form>
                        <fieldset>
                            <h1>Login Form</h1>
                            <div className="usernameDiv">
                                <label for="username" className="input">username*</label>
                                <input type="text" placeholder="enter username" className="inputName input" required></input>
                            </div>
                            <div className="passwordDiv">
                                <label for="password" className="input">password*</label>
                                <input type="text" placeholder="enter password" className="inputPassword input" required></input>
                            </div>
                            <div className="btnDiv">
                                <button className="btn" onClick={this.handleClick}>Login</button>
                            </div>
                        </fieldset>
                    </form>
                </section>
            </>
        )
    }
}

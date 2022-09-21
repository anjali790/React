import React, { Component } from "react";
import './Login.css'

export class Login extends Component {
    constructor(props) {
        super();
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
                                <input type="text" placeholder="enter username" value="" className="inputName input" required></input>
                            </div>
                            <div className="passwordDiv">
                                <label for="password" className="input">password*</label>
                                <input type="text" placeholder="enter password" value="" className="inputPassword input" required></input>
                            </div>
                            <div className="btnDiv">
                                <button type="submit" value="" className="btn">Login</button>
                            </div>
                        </fieldset>
                    </form>
                </section>
            </>
        )
    }
}

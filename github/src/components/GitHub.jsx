import React, { Component } from "react";
import './GitHub.css';
import { FaGithub } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa"

export default class GitHub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            // username:'',
        };
    }


    componentDidMount() {
        fetch("https://api.github.com/users/anjali790")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    data: json,
                });
            })
    }

    render() {
        const { data } = this.state;
        return (
            <>
                <div className="App">
                    <header>
                        <h1 className="h1">github user search app</h1>
                        <p><FaGithub /></p>
                    </header>
                    <main>
                        <div className="container">
                            <form className="form">
                                <input type="text" className="input" placeholder="enter username" required></input>
                                <button className="btn">search user</button>
                            </form>
                        </div>
                    </main>

                    <>
                        <div className="displayDiv">
                            <h1 className="userName">{data.name}</h1>
                            <div className="displayInnerDiv">
                                <p><span><FaUserFriends /></span>  {data.followers} <span>followers . {data.following} following</span></p>
                            </div>
                            <p className="bio"><span>Bio: </span> {data.bio}</p>
                            <img src={data.avatar_url} alt=""></img>
                        </div>
                    </>
                </div>
            </>
        );
    }
}
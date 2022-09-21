import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export class InstaHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <header>
                    <div className="left">
                        <img width="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZYEvRzR1lgR_WRC-6k2cEW7b2bDY8XeMSg&usqp=CAU" alt=""></img>
                    </div>
                    <div className="center">
                        <i class="fa-solid fa-magnifying-glass"><FaSearch/></i>
                        <input type="search" placeholder="Search"></input>
                    </div>
                    <div className="right">
                        <nav>
                            <i class="fa-solid fa-house"><FaHome/></i>
                            <i class="fa-brands fa-facebook-messenger"><FaFacebookMessenger/></i>
                            <i class="fa-regular fa-square-plus"><FaRegPlusSquare/></i>
                            <i class="fa-regular fa-compass"><FaRegCompass/></i>
                            <i class="fa-regular fa-heart"><FaRegHeart/></i>
                        </nav>
                        <div className="img1">
                            <img src="https://i.pinimg.com/222x/e9/dc/61/e9dc61df4d62a6ffed03429aa989872d.jpg" alt=""></img>
                        </div>
                    </div>
                </header>
                <section>
                    <div className="left-section">
                        <div className="insta-story">
                            <div className="story1">
                                <img width="60px" height="60px" src="https://i.pinimg.com/222x/e9/dc/61/e9dc61df4d62a6ffed03429aa989872d.jpg" alt="profile"></img>
                                <p>anjali22</p>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}
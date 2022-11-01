import React from "react";

export function InstaHeader() {

    return (
        <>
            <header>
                <div className="left">
                    <img width="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZYEvRzR1lgR_WRC-6k2cEW7b2bDY8XeMSg&usqp=CAU" alt=""></img>
                </div>
                <div className="center">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="search" placeholder="Search"></input>
                </div>
                <div className="right">
                    <nav>
                        <i class="fa-solid fa-house"></i>
                        <i class="fa-brands fa-facebook-messenger"></i>
                        <i class="fa-regular fa-square-plus"></i>
                        <i class="fa-regular fa-compass"></i>
                        <i class="fa-regular fa-heart"></i>
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
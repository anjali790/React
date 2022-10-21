// import React, { Component } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import React, {useEffect, useState} from 'react';
import axios from 'axios';


// export class InstaPost extends Component {
export function InstaPost() {
    const [news, setNews] = useState([]);

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: [{
    //             user: "anjali22",
    //             id: 1,
    //             profileUrl: "https://i.pinimg.com/222x/e9/dc/61/e9dc61df4d62a6ffed03429aa989872d.jpg",
    //             postUrl: "https://images.squarespace-cdn.com/content/v1/596b2969d2b85786e6892853/1606536053156-UMLLKQYW2AAFSXAMWGC5/Nature+quotes+-+Shikoba",
    //             likes: 123,
    //             time: 13,
    //         },
    //         {
    //             user: "shubro_12",
    //             id: 2,
    //             profileUrl: "https://i.pinimg.com/originals/fb/c1/44/fbc14457d9efe6cf1e84a30d84041bb8.jpg",
    //             postUrl: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000",
    //             likes: 151,
    //             time: 7,
    //         },
    //         {
    //             user: "ekta_kt",
    //             id: 3,
    //             profileUrl: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
    //             postUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quote-1-1557339424.jpg",
    //             likes: 187,
    //             time: 11,
    //         },
    //         {
    //             user: "shubhankar03",
    //             id: 4,
    //             profileUrl: "https://webneel.com/wallpaper/sites/default/files/images/08-2018/2-nature-wallpaper-grass.jpg",
    //             postUrl: "https://images.quoteslifetime.com/mother-nature/nature-quotes.jpg",
    //             likes: 192,
    //             time: 22,
    //         },
    //         {
    //             user: "aarav_y22",
    //             id: 5,
    //             profileUrl: "https://images3.content-hci.com/commimg/myhotcourses/blog/post/myhc_89683.jpg",
    //             postUrl: "https://c4.wallpaperflare.com/wallpaper/839/741/145/your-future-hd-your-future-is-created-by-what-you-do-today-not-tomorrow-wallpaper-preview.jpg",
    //             likes: 99,
    //             time: 9,
    //         },
    //         ]
    //     }
    // }


    
    useEffect(() => {
        // axios.get(`https://newsapi.org/v2/everything?q=cricket&from=2022-09-20&sortBy=publishedAt&apiKey=46be7c2d81f5465e8318c9dfaebfd6fe`)
            axios.get(`https://newsapi.org/v2/everything?q=cricket&from=2022-10-17&sortBy=publishedAt&apiKey=e53ee295b9c7459da80e049c910e8e0f`)
            .then((response) => {
                setNews([...response.data.articles]);
                // console.log(cricket)
                // setLoading(true);
            })
    }, []);


    // render(
        // let { data } = this.state;
        return (
            <>
                {
                    news.map((data) => {
                        return (
                            <div key={data.url}>
                                <section>
                                    <div className="insta-post">
                                        <div className="post-heading">
                                            <div className="post-left">
                                                <div className="image">
                                                    <img width="40px" height="40px" src={data.urlToImage} alt=""></img>
                                                </div>
                                                <div className="user-name">
                                                    <p className="name">{data.user}</p>
                                                </div>
                                            </div>
                                            <div className="post-right">
                                                <i class="fa-solid fa-ellipsis"><FaEllipsisH/></i>
                                            </div>
                                        </div>
                                        <div className="post-image">
                                            <img width="595px" height="595px" src={data.postUrl} alt=""></img>
                                        </div>
                                        <div className="insta-post-footer">
                                            <div className="post-icon">
                                                <i className="heart-icon"><FaHeart/></i>
                                                <i><FaRegComment/></i>
                                                <i class="FaRegPaperPlane"><FaRegPaperPlane/></i>
                                            </div>
                                            <div className="save-icon">
                                                <i class="fa-regular fa-bookmark"><FaRegBookmark/></i>
                                            </div>
                                        </div>
                                        <div className="post-footer-like">
                                            <p className="likes">Liked by {data.likes}</p>
                                            <p className="name">{data.user}</p>
                                            <p className="comment">View all 37 comments</p>
                                            <p className="time">{data.time} HOURS AGO</p>
                                        </div>
                                        <div className="comment-footer">
                                            <div className="left-footer">
                                                <i class="fa-regular fa-face-smile"><FaRegSmile/></i>
                                                <input type="text" placeholder="Add a comment"></input>
                                            </div>
                                            <div className="right-footer">
                                                <p>Post</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )
                    }
                    )
                }
            </>
        )
    // )
}
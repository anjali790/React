import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
// import { Likes } from './Likes';

import Comments from './Comments';

export function InstaPost() {
    const [instaPost, setInstaPost] = useState([]);
    const [like, setLike] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleLike = () => {
        setLike((prev) => prev + 1)
    }

    const handleDelete = (url) => {
        const filteredData = instaPost.filter((data) => data.url !== url);
        setInstaPost(filteredData);
    }

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=cricket&from=2022-10-17&sortBy=publishedAt&apiKey=e53ee295b9c7459da80e049c910e8e0f`)
            .then((response) => {
                setInstaPost([...response.data.articles]);
                // console.log(cricket)
                setLoading(true);
            })
    }, []);

    return (
        <>
            {loading ?
                <>
                    {
                        instaPost.map((data) => {
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
                                                        <p className="name">{data.source.name}</p>
                                                    </div>
                                                </div>
                                                <div className="post-right">
                                                    <i class="fa-solid fa-ellipsis"></i>
                                                </div>
                                            </div>
                                            <div className="post-image">
                                                <img width="595px" height="595px" src={data.urlToImage} alt=""></img>
                                            </div>
                                            <div className="insta-post-footer">
                                                <div className="post-icon">
                                                    <i class="fa-solid fa-heart" id="heart-icon" onClick={handleLike}></i>

                                                    {/* <Likes /> */}
                                                    <i class="fa-regular fa-comment"></i>
                                                    <i class="fa-regular fa-paper-plane"></i>
                                                </div>
                                                <div className="save-icon">
                                                    <i class="fa-regular fa-bookmark" onClick={() => handleDelete(data.url)}></i>
                                                </div>
                                            </div>
                                            <div className="post-footer-like">
                                                <p className="likes">Liked by {like}</p>
                                                <p className="name">{data.source.name}</p>
                                                <p className="comment">View all 37 comments</p>
                                                <p className="time">11 HOURS AGO</p>
                                            </div>
                                            {/* <div className="comment-footer"> */}
                                            {/* <div className="left-footer">
                                                    
                                                    <i class="fa-regular fa-face-smile"></i> */}
                                            <Comments />
                                            {/* <input type="text" placeholder="Add a comment"></input> */}
                                            {/* </div> */}
                                            {/* <div className="right-footer">
                                                    <p>Post</p>
                                                </div> */}
                                            {/* </div> */}
                                        </div>
                                    </section>
                                </div>
                            )
                        }
                        )
                    }
                </> : <Spinner />
            }
        </>
    )
}
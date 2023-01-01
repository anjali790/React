import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import { Likes } from './Likes';

export function Science() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get("https://newsapi-z4r7.onrender.com/news?q=science")
            .then((response) => {
                setNews([...response.data.articles]);
                setLoading(true);
            })
    }, []);

    const handleRemove = (url) => {
        const filteredData = news.filter((data) => data.url !== url);
        setNews(filteredData);
    };

    return (
        <>
            <div className='container'>
                {loading ?
                    <>
                        {
                            news.map((data) =>
                                <>
                                    <div className='politics_div' key={data.url}>
                                        <div className='politics_img_div'>
                                            <img src={data.urlToImage} alt=""></img>
                                        </div>
                                        <div className='politics_content_div'>
                                            <h1>{data.title}</h1>
                                            <span>
                                                <p>{data.description}</p>
                                            </span>
                                            <div className='news_desc_div'>
                                                <div className='news_description'>
                                                    <button className='read_more_btn'><a href={data.url}>Read more</a></button>
                                                </div>
                                                <div>
                                                    <button className='remove_btn' onClick={() => handleRemove(data.url)}>Delete</button>
                                                </div>
                                            </div>
                                            <Likes />
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </>
                    : <Spinner />
                }
            </div>
        </>
    )
}
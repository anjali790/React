import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Likes } from './Likes';
import Spinner from './Spinner';

export function Politics() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get('https://newsapi.org/v2/everything?q=politics&from=2022-10-17&sortBy=publishedAt&apiKey=e53ee295b9c7459da80e049c910e8e0f')
            .then((response) => {
                setNews([...response.data.articles])
                // console.log(politics)
                setLoading(true);
            });
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
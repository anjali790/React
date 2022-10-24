import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Likes } from './Likes';
import Spinner from './Spinner';

export function Headlines(props) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-09-20&sortBy=publishedAt&apiKey=e53ee295b9c7459da80e049c910e8e0f').then(resp => {
      let filteredNews = resp.data.articles;
      // console.log(filteredNews)
      if (props.search) {
        filteredNews = resp.data.articles.filter((datas) => {
          if (datas.title) {
            return datas.title.toLowerCase().includes(props.search.toLowerCase());
          }
        });
      }
      setNews(filteredNews);
      setLoading(true);
    }).catch(error => console.log(error));

  }, [props.search]);

  const handleRemove = (url) => {
    const filteredData = news.filter((data) => data.url !== url);
    setNews(filteredData);
  };

  return (
    <>
      <div className='container news_main_container'>
        {loading ?
          <div className='news_main_div'>
            {
              news.map(post =>
                <>
                  <div className='news_article_div' key={post.url}>
                    <div className='news_title_div'>
                      <img src={post.urlToImage} alt="" className='news_img'></img>
                      <p className='news_title'>{post.title}</p>
                      <div className='news_desc_div'>
                        <div className='news_description'>
                          <button className='read_more_btn'><a href={post.url}>Read more</a></button>
                        </div>
                        <div>
                          <button className='remove_btn' onClick={() => handleRemove(post.url)}>Delete</button>
                        </div>
                      </div>
                    </div>
                    <Likes />
                  </div>
                </>
              )
            }
          </div>
          : <Spinner />
        }
      </div>
    </>
  )
}
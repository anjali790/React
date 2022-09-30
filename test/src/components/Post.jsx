import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Post() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        setPost([...response.data]);
      });
  }, []);

  return (
    <>
      {post.map((data) => (
        <div className='container'>
          <img src={data.url} alt=""></img>
        </div>
      ))}
    </>
  )
}

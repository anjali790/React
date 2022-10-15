import React, {useEffect, useState} from 'react';
import axios from 'axios';

export function FetchData(){
    const [post, setPost] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>setPost([...response.data]));
        console.log(post);
    },[]);

    return(
        <>
        {
            post.map((datas)=>(
                <div key={datas.id}>
                    <h2>{datas.title}</h2>
                    <p>{datas.body}</p>
                </div>
            ))
        }
        </>
    )
}
import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Axios() {
    // const [posts, setPosts] = useState([]);
    const [post, setPost] = useState([])
    const [id, setId] = useState(1);
    const [btnId, setBtnId] = useState(1);


    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=> setPost(response.data));
    },[btnId]);


    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then((response) =>{
    //         console.log(response.data);
    //         setPosts([...response.data])});
    //     },[]);

    return (
        <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        {/* <button onClick={()=> setId(prev=>prev+1)}>Click- {id}</button> */}
        <input type="text" value={id} onChange={((e)=> setId(e.target.value))}></input>
        <button onClick={()=> setBtnId(id)}>click here</button>



        {/* {posts.map((post)=>(
            <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        ))} */}
        </>
    )
}
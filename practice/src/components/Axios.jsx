import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Axios() {
    //All data:-
    const [posts, setPosts] = useState([]);

    //Filter part:-
    const [filterData, setFilterData] = useState([]);
    const [serach, setSearch] = useState("");


    // Button click:-
    const [post, setPost] = useState([])
    const [id, setId] = useState(1);
    const [btnId, setBtnId] = useState(1);



    // Button click:-
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=> setPost(response.data));
    },[btnId]);


    //All data:-
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                // console.log(response.data);
                setPosts([...response.data]);
                setFilterData([posts, ...response.data])
            });
    }, []);


    //Filter part:-
    useEffect(() => {
        const filteredData = posts.filter((post) => {
            if (post.title) {
                // console.log(serach)
                return post.title.includes(serach)
            }
        });
        // console.log(filteredData);
        setFilterData(filteredData)
    }, [serach]);

    return (
        <>
            {/* Filter data  */}
            <input type="text" value={serach} onChange={(e) => setSearch(e.target.value)}></input>
            {filterData.map((post) => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ))}



            {/* Button part:- */}
            <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={()=> setId(prev=>prev+1)}>Click- {id}</button>
        <input type="text" value={id} onChange={((e)=> setId(e.target.value))}></input>
        <button onClick={()=> setBtnId(id)}>click here</button>


            {/* All data:- */}
            {/* {posts.map((post)=>(
            <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        ))} */}
        </>
    );
};
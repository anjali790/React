import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Test() {
    const [posts, setPosts] = useState([]);
    const [filterComment, setFilterComment] = useState([]);
    const [serach, setSearch] = useState("");


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                setPosts([...response.data]);
                setFilterComment([posts, ...response.data])
            });
    }, []);


    useEffect(() => {
        const filteredData = posts.filter((post) => {
            if (post.name) {
                return post.name.includes(serach.toLowerCase());
            }
        });
        // console.log(filteredComment);
        setFilterComment(filteredData)
    }, [serach]);


    return (
        <>
            <input type="text" value={serach} onChange={(e) => setSearch(e.target.value)}></input>
            {filterComment.map((data) => (
                <div key={data.id}>
                    <h1>{data.name}</h1>
                    <p>{data.body}</p>
                </div>
            ))};
        </>
    );
};
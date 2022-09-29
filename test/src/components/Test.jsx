import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Test() {
    const [posts, setPosts] = useState([]);
    const [filterComment, setFilterComment] = useState([]);
    const [search, setSearch] = useState("");
    const [buttonId, setButtonId] = useState(1);


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
                return post.name.includes(search.toLowerCase());
            }
        });
        // console.log(filteredComment);
        setFilterComment(filteredData)
    }, [search]);




    return (
        <>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            {/* <button onClick={()=> setButtonId()}>click here</button> */}
            {filterComment.map((data) => (
                <div key={data.id}>
                    <div className='container'>
                        <h1 className='name'>{data.name}</h1>
                        <p className='body'>{data.body}</p>
                    </div>
                </div>
            ))};
        </>
    );
};
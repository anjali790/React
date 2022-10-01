import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Test() {
    const [posts, setPosts] = useState([]);
    const [filterComment, setFilterComment] = useState([]);
    const [search, setSearch] = useState("");
    // const [buttonId, setButtonId] = useState(1);


    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`)
            .then((response) => {
                setPosts([response.data]);
                console.log(response.data)
                setFilterComment([posts,...response.data]);
            });
    }, []);


    useEffect(() => {
        const filteredData = posts.filter((post) => {
            if (post.name) {
                return post.name.includes(search.toLowerCase());
            }
        });
        setFilterComment(filteredData)
    }, [search]);




    return (
        <>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            {filterComment.map((data) => (
                <div key={data.id}>
                    <div className='container'>
                        <h1 className='name'>{data.meals.strMeal}</h1>
                        {/* <p className='body'>{data.body}</p> */}
                    </div>
                </div>
            ))}
        </>
    );
};

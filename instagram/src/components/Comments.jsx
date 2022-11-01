import React, { useState } from 'react'

export default function Comments() {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const handlePostComment = () => {
        setComments([...comments, comment]);
    }
    return (
        <>
            <div>
                <i class="fa-regular fa-face-smile"></i>
                <input className='comment_input' type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Add a comment' />
                <button className='post_comment_btn' onClick={handlePostComment}>Post</button>
            </div>
            {
                comments.map((data) => (
                    <div className='comment_output_div'>
                        <span>{data}</span>
                        <button className='delete_comment_btn' onClick={() => {
                            let filteredData = comments.filter((value) => value !== data);
                            setComments([...filteredData])
                        }}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}

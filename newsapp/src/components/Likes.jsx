import React, { useState } from 'react';

export function Likes() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleLike = () => {
        setLike((prev) => prev + 1)
    }

    const handleDislike = () => {
        setDislike((prev) => prev + 1)
    }

    const handlePostComment = () => {
        setComments([...comments, comment]);
    }

    return (
        <>
            <div className='btn_div'>
                <div className='like_btn_div'>
                    <div>
                        <button className='like_btn btn' onClick={handleLike}><i class="fa-solid fa-heart"></i> {like}</button>
                        <button className='like_btn btn' onClick={handleDislike}><i class="fa-solid fa-heart-crack"></i> {dislike}</button>
                    </div>
                    <div className='comment_div'>
                        <input className='comment_input' type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Add a comment' />
                        <button className='post_comment_btn' onClick={handlePostComment}>Post</button>
                    </div>
                </div>
            </div>
            {comments.map((data) => (
                <div className='comment_output_div'>
                    <span>{data}</span>
                    <button className='delete_comment_btn' onClick={() => {
                        let filteredData = comments.filter((value) => value !== data);
                        setComments([...filteredData])
                    }}>Delete</button>
                </div>
            ))}
        </>
    )
}
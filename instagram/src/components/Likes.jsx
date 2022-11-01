import React, { useState } from 'react';

export function Likes() {
    const [like, setLike] = useState(0);

    const handleLike = () => {
        setLike((prev) => prev + 1)
    }

    return (
        <>
            <i class="fa-solid fa-heart" id="heart-icon" onClick={handleLike}> {like}</i>
        </>
    )
}
import React from 'react';
import { useNavigate } from 'react-router';

export function Error() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }
    return (
        <div className='container'>
            <h2>page not found</h2>
            <button onClick={handleClick}>Take me back to Headlines</button>
        </div>
    )
}
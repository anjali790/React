import React from 'react';
import { useNavigate } from 'react-router';
// import { Navigate } from 'react-router';

export function Error() {
    const navigate = useNavigate();
    const handleClick= () =>{
        navigate("/");
        // navigate("/about");
    }
    return (
        <>
        {/* <Navigate to='/'></Navigate> */}
            <h2>page not found</h2>
            <button onClick={handleClick}>Take me back to Home</button>
        </>
    )
}

import React, { useState } from 'react';

export function Skills({ skills }) {
    // skills = ['HTML', 'CSS', 'Javascript'];

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <div>
                <ul>
                    {skills && skills.map((skill) => (
                        <li key={skill}>{skill}</li>))}
                </ul>
                {isLoggedIn ? (<button>start learing</button>) : (
                    <button onClick={() => setIsLoggedIn(true)}>log in</button>)}
            </div>
        </>
    )
}

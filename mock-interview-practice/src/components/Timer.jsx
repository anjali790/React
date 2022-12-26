import React from 'react'
import { useState } from 'react';

let currentTime = new Date().toLocalTimeString

export function Timer() {
    const [time, setTime] = useState(currentTime);

    setInterval(() => {
        currentTime = new Date().toLocaleTimeString()
        setTime(currentTime);
    }, 1000);

    return (
        <>
            <h1>{time}</h1>
        </>
    )
}

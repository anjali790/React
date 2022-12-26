import React from 'react'
import { useState } from 'react';

let currentTime = new Date().toLocalTimeString
// let currentTime = new Date().toLocaleTimeString()

export function DigitalClock() {
    const [time, setTime] = useState(currentTime);
    let interval;

    interval = setInterval(() => {
        currentTime = new Date().toLocaleTimeString()
        setTime(currentTime);
    }, 1000);

    const handleStop = () => {
        clearInterval(interval);
    }

    return (
        <>
            <h1>{time}</h1>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}

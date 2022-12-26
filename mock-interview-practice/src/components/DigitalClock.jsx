import React from 'react'
import { useState } from 'react';

let currentTime = new Date().toLocalTimeString
// let currentTime = new Date().toLocaleTimeString()

export function DigitalClock() {
    const [time, setTime] = useState(currentTime);
    const [show, setToggleShow] = useState(true);

    setInterval(() => {
        currentTime = new Date().toLocaleTimeString()
        setTime(currentTime);
    }, 1000);

    const handleToggleShow = () => {
        setToggleShow(!show);
    }

    return (
        <>
            <button onClick={handleToggleShow}>{show ? "hide" : "show"}</button>
            {show && <h1>{time}</h1>}
        </>
    )
}

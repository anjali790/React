import React, { useState } from 'react';
import './DigitalClock.css';

export function DigitalClock() {
    let currentTime = new Date().toLocaleTimeString();

    const [time, setTime] = useState(currentTime);

    const timer = () => {
        currentTime = new Date().toLocaleTimeString();
        setTime(currentTime);
    }

    setInterval(timer,2000);

    return (
        <>
            <div className="container">
                <h1>Current Time</h1>
                <div className="box">
                    <h2 className="time">{time}</h2>
                </div>
            </div>
        </>
    )
}
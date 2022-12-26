import React, { useState } from 'react';

export function AppendCounter() {
    const [counter, setCounter] = useState([10]);

    const handleIncrement = () => {
        setCounter([...counter, counter[counter.length - 1] + 1]);
    }

    const handleDecrement = () => {
        // counter.pop()
        // setCounter([...counter])  
        setCounter([...counter.slice(0, counter.length - 1)]);
    }

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}
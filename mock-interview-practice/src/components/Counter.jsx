import React, { useState } from 'react';

export function Counter() {
    const [counter, setCounter] = useState([10]);

    const handleIncrement = () => {
        setCounter([...counter, counter[counter.length - 1] + 1]);
    }

    const handleDecrement = () => {  
        // setCounter([...counter.slice(0, counter.length - 1)]);
        setCounter([...counter.splice(counter.length-1,1)])
    }
   

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}
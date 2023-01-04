import React, { useState } from 'react';

export function Counter(props) {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleDecrement = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(0);
    }

    return (
        <>
            {props.name.map((value) => { return <h1>Hello</h1> })}
            <h1>counter - {counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement} disabled={counter === 0}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

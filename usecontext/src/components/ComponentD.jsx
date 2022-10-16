import React, { useContext } from 'react';
import { CountStateContext } from "../contexts/CountContext";

export function ComponentD() {
    const { increment } = useContext(CountStateContext);
    const { decrement } = useContext(CountStateContext);

    return (
        <div className='componentD'>
            <p>Component D</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

import React, { useState } from 'react'
import { useCallback } from 'react';
import ChildComp from './ChildComp';

export function ParentComp() {
    const [counter, setCounter] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const secondCounter = useCallback(() => {
        setCounterTwo(counterTwo - 1);
    }, [counterTwo]);

    return (
        <>
            <h1>{counter}</h1>
            <span>Parent Component:- </span>
            <button onClick={handleIncrement}>Increase</button>
            <ChildComp secondCounter={secondCounter} counter={counterTwo} />
        </>
    )
}

import React, { useState } from "react";

export function MemoCounter() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    };

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    };

    const isEven = () => {
        let i = 0;
        while (i < 10000000000) i++;
        return counterOne % 2 === 0;
    };


    return (
        <>
            <h1>counterOne- {counterOne} -{isEven() ? 'EVEN' : 'ODD'}</h1>
            <h1>counterTwo- {counterTwo}</h1>
            <button onClick={incrementOne}>increment CounterOne</button>
            <button onClick={incrementTwo}>increment CounterTwo</button>

        </>
    )
}
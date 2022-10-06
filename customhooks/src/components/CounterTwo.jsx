// import React, { useState } from "react";
import React from "react";
import { useCounter } from './hooks/useCounter';

export function CounterTwo() {
    // const [counter, setCounter] = useState(0);
    const [count, increment, decrement, reset] =useCounter(10);



    // const increment = ()=>{
    //     setCounter((prev)=>prev+1)
    // }

    // const decrement = () =>{
    //     setCounter((prev)=>prev-1)
    // }

    // const reset = () =>{
    //     setCounter(0);
    // }

    return (
        <>
            <h1>counter 2 - {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}
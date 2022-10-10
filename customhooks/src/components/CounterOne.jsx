// import React, { useState } from "react";
import {useCounter} from './hooks/useCounter';

export function CounterOne(){
    // const [counter, setCounter] = useState(0);

    const [count, increment, decrement, reset] = useCounter(0);

    // const increment = ()=>{
    //     setCounter((prev)=>prev+1)
    // }

    // const decrement = () =>{
    //     setCounter((prev)=>prev-1)
    // }

    // const reset = () =>{
    //     setCounter(0);
    // }

    return(
        <>
        <h1>counter one - {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}
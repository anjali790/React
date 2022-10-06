import React, { useState } from "react";

export function CounterOne(){
    const [counter, setCounter] = useState(0);

    const increment = ()=>{
        setCounter((prev)=>prev+1)
    }

    const decrement = () =>{
        setCounter((prev)=>prev-1)
    }

    const reset = () =>{
        setCounter(0);
    }

    return(
        <>
        <h1>count - {counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}

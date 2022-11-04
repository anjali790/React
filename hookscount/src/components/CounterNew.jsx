import React, {useState} from "react";

export function CounterNew (){
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count+1);
    }

    return(
        <>
        <h1>countNew- {count}</h1>
        <button onClick={increment}>click</button>
        </>
    )
}
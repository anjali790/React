import React, {useState} from "react";

export function Counter (){
    const [count, setCounter] = useState(10);
    
    return(
        <>
        <p>{count}</p>
        <button onMouseOver = {()=> setCounter(count + 10)}>Increment</button>
        <button onMouseOver = {()=> setCounter(count -10)}>Decrement</button>
        </>
    )
};
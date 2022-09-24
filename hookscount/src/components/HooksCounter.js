import React, {useState} from "react";

export function HooksCounter(){
    const [count, setNum] = useState(0);
    
    return(
        <>
        <p>{count}</p>
        <button onClick={()=> setNum(count-1)}>decrement</button>
        </>
    )
}
import React, {useEffect, useState} from "react";

export function DocTitleTwo(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `count - ${count}`;
    },[count]);

    return(
        <>
        <button onClick={()=> setCount(count+1)}>count- {count}</button>
        </>
    )
}
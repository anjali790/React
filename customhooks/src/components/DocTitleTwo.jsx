// import React, {useEffect,useState} from "react";
import React, {useState} from "react";
import { useUpdateTitle } from "./Hooks/useUpdateTitle";

export function DocTitleTwo(){
    const [count, setCount] = useState(10);
    useUpdateTitle(count);


    // useEffect(()=>{
    //     document.title = `count - ${count}`;
    // },[count]);

    return(
        <>
        <button onClick={()=> setCount(count+1)}>count- {count}</button>
        </>
    )
}
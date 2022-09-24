import React, { useState } from "react";
import { Initial_Count } from "./Constants";

export function Counter() {
    // const initialCount = 0;
    const [counter, setCounter] = useState(Initial_Count);
    const [name, setName] = useState('Anjaliy');


    const handleName = () => {
        if (name !== 'Anjali') {
            setName(name.toLocaleUpperCase());
        };
    };

    return (
        <>
            <p>{counter}</p>
            <p>My name is {name}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            <button onClick={() => setCounter(Initial_Count)}>Reset</button>
            {/* <button onClick = {()=> setName(name.toLocaleUpperCase())}>Capatalize</button>
        <button onClick = {()=>{
            if(name !== 'Anjali'){
                setName(name.toLocaleUpperCase());
            }
        }}>Condition Capatalize</button> */}
            <button onClick={handleName}>capatalize</button>
        </>
    )
};
import React, { useState } from "react";
import { Initial_Count } from "./Constants";

export function Counter() {
    // const initialCount = 0;
    const [counter, setCounter] = useState(Initial_Count);
    const [name, setName] = useState('Anjaliy');


    const handleName = () => {
        if (name !== 'Anjali') {
            setName(name.toUpperCase());
        };
    };


    const handleIncrement = (step) =>{
        setCounter(counter + step);
    }

    const handleDecrement = (num) =>{
        setCounter(counter - num);
    }

    // const handleIncrementByFive = () =>{
    //     setCounter(counter+1);
    //     setCounter(counter+1);
    //     setCounter(counter+1);
    //     setCounter(counter+1);
    //     setCounter(counter+1);
    // }

    return (
        <>
            <p>{counter}</p>
            <p>My name is {name}</p>
            <p></p>
            <button onClick = {() => setCounter(counter +1 )}>increment</button>
            <button onClick={() => handleIncrement(5)}>Increment</button>
            <button onClick={() => handleDecrement(2)}>Decrement</button>
            <button onClick={() => setCounter(Initial_Count)}>Reset</button>
            {/* <button onClick = {()=> setName(name.toLocaleUpperCase())}>Capatalize</button>
        <button onClick = {()=>{
            if(name !== 'Anjali'){
                setName(name.toLocaleUpperCase());
            }
        }}>Condition Capatalize</button> */}
            <button onClick={handleName}>capatalize</button>
            {/* <button onClick={handleIncrementByFive}>increment by 5</button> */}
        </>
    )
};
import React, { useState } from "react";

export function ChangeFontSize() {
    const [input, setInput] = useState("Anjali");
    // const [color, setColor] = useState("blue");
    const [fontsize, setFontSize] = useState(40);

    // const handleFontColor = ()=>{
    //     setColor("green");
    // }

    const handleDecreaseFontSize = () => {
        setFontSize((prev) => prev - 10)
        // setFontSize("30px");
    }

    const handleIncreaseFontSize = () => {
        setFontSize((prev) => prev + 10)
        // setFontSize("50px");
    }

    return (
        <div className="App">
            <input onChange={(e) => setInput(e.target.value)}></input>
            {/* <h1 style={{color:color}}>{input}</h1> */}
            <h1 style={{ fontSize: `${fontsize}px` }}>{input}</h1>
            {/* <button onClick={handleFontColor}>Change font color</button> */}
            <button onClick={handleDecreaseFontSize}>Decrease font size</button>
            <button onClick={handleIncreaseFontSize}>Increase Font size</button>
            {/* <button onClick={handleName}>Change name</button> */}
        </div>
    );
}
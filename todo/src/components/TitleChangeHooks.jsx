import React, { useState, useEffect } from 'react'

export function TitleChangeHooks() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("calling hooks");
        document.title = `${count} times clicked`;
    },[count]);

    return (
        <>
            {/* <p>count {count}</p> */}
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </>
    );
}
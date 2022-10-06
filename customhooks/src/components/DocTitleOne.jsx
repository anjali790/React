// import React, {useEffect, useState} from "react";
import React, { useState } from "react";
import { useUpdateTitle } from "./hooks/useUpdateTitle";

export function DocTitleOne() {
    const [count, setCount] = useState(0);
    useUpdateTitle(count);

    // useEffect(() => {
    //     document.title = `count  - ${count}`;
    // }, [count]);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>click - {count}</button>
        </>
    )
}
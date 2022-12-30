import React, { memo } from 'react'

const ChildComp = ({ counterTwo, secondCounter }) => {

    console.log("child component re-render");

    return (
        <>
            <h1>{counterTwo}</h1>
            <span>Child Component:- </span>
            <button onClick={secondCounter}>Decrement</button>
        </>
    )
}
export default memo(ChildComp);
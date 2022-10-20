import React, { useContext } from 'react';
import { ComponentB } from './ComponentB';
import { CountStateContext } from "../contexts/CountContext";

export function ComponentA() {
    const { count } = useContext(CountStateContext);

    return (
        <>
            <div className={count?'componentA': 'componentB'}>
                <p>Component A</p>
                <p>Count is: {count}</p>
            </div>
            <ComponentB />
        </>
    )
}

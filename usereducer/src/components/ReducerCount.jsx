import React, { useReducer } from "react";

const initialState = {
    value: 0,
}

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return { ...state, value: state.value + 1 };
        case 'decrement':
            return { ...state, value: state.value - 1 };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export function ReducerCount() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>count2 - {count.value}</h1>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </>
    )
}
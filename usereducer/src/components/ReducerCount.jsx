import React, { useReducer } from "react";

const initialState = {
    value: 0,
}

const reducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case 'increment':
            return { ...state, value: state.value + action.value };
        case 'decrement':
            return { ...state, value: state.value - action.value };
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
            <button onClick={()=> dispatch({type: 'increment', value: 10})}>Increment by 10</button>
            <button onClick={() => dispatch({type: 'increment', value:5})}>Increment by 5</button>
            <button onClick={() => dispatch({type: 'decrement', value:3})}>Decrement by 3</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </>
    )
}
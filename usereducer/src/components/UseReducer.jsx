import React, { useReducer } from "react";

// const initialState = 0;
const initialState = {
    value: 0,
};
const reducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            // return state + 1;
            return { ...state, value: state.value + 1 };
        case 'DECREMENT':
            // return state - 1;
            return { ...state, value: state.value - 1 };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}
export function UseReducer() {
    // const [count, dispatch] = useReducer(reducer,initialState);
    const [countObj, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>count - {countObj.value}</h1>
            <button onClick={() => dispatch('INCREMENT')}>Increment</button>
            <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
            <button onClick={() => dispatch('RESET')}>Reset</button>
        </>
    )
}


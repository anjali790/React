import React, { useReducer } from "react";

const initialState = {
    value: 0,
    name: 'vasanth',
}

const reducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, value: state.value + action.value };
        case 'DECREMENT':
            return { ...state, value: state.value - action.value };
        case 'RESET':
            return initialState;
        case 'UPDATE':
            return {...state, name: action.value};
        default:
            return state;
    }
}

export function ReducerCount() {
    const [countObj, dispatch] = useReducer(reducer, initialState);
    const [secondObj, secondDispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>count2 - {countObj.value}</h1>
            <h2>name- {countObj.name}</h2>
            <h3>count3 - {secondObj.value}</h3>
            <button onClick={()=> dispatch({type: 'INCREMENT', value: 10})}>Increment by 10</button>
            <button onClick={() => dispatch({type: 'INCREMENT', value:5})}>Increment by 5</button>
            <button onClick={() => dispatch({type: 'DECREMENT', value:3})}>Decrement by 3</button>
            <button onClick={()=> secondDispatch({type: 'DECREMENT', value:20})}>Drecrement secondObj by 20</button>
            <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
            <button onClick={()=> dispatch({type: 'UPDATE', value:'anjali'})}>change name</button>
        </>
    )
}
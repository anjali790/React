import { useState } from 'react'

export function useCounter(initialState = 0) {
    const [count, setCounter] = useState(initialState);

    const increment = () => {
        setCounter((prev) => prev + 1)
    }

    const decrement = () => {
        setCounter((prev) => prev - 1)
    }

    const reset = () => {
        setCounter(initialState);
    }
    
    return [count, increment, decrement, reset]
}

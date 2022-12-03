import React, { useState } from 'react'

export function TodoApp() {
    const [inputData, setInputData] = useState('');
    const [item, setItem] = useState([]);

    const addItem = () => {
        if (inputData) {
            setItem([...item, inputData]);
            setInputData("");
        }
    }

    const deleteItem = (index) => {
        const updatedTodo = item.filter((element, ind) => {
            return ind !== index;
        });
        setItem(updatedTodo);
    }

    const removeAll = () => {
        return setItem([]);
    }

    return (
        <>
            <div>
                <input type='text' placeholder='write your todo here' value={inputData} onChange={(e) => setInputData(e.target.value)}></input>
                <button onClick={addItem}>Add Todo</button>
                <button onClick={removeAll}>Remove All</button>
            </div>
            <div>
                {
                    item.map((element, index) => {
                        return (
                            <div key={index}>
                                <h3>{element}</h3>
                                <button onClick={() => deleteItem(index)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
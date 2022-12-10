import React, { useState } from 'react'
import { useEffect } from 'react';

const getData = () => {
    let list = localStorage.getItem('list');
    if (list) {
        return JSON.parse(localStorage.getItem('list'))
    } else {
        return [];
    }
}

export function TodoApp() {
    const [inputData, setInputData] = useState('');
    const [item, setItem] = useState(getData());

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

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(item));
    }, [item]);

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
import React from 'react'

export function ComponentD({ handleClick }) {
    return (
        <div className='componentD'>
            <p>Component D</p>
            <button onClick={handleClick}>set count</button>
        </div>
    )
}

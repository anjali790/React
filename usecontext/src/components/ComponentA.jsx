import React from 'react';
import { ComponentB } from './ComponentB';

export function ComponentA({ count , handleClick }) {
    return (
        <>
            <div className='componentA'>
                <p>Component A</p>
                <p>Count is - {count}</p>
            </div>
            <ComponentB handleClick={handleClick} />
        </>
    )
}

import React from 'react';
import { ComponentC } from './ComponentC';

export function ComponentB({ handleClick }) {
    return (
        <>
            <div className='componentB'>
                <p>Component B</p>
            </div>
            <ComponentC handleClick={handleClick} />
        </>
    )
}

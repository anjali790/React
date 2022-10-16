import React from 'react';
import { ComponentC } from './ComponentC';

export function ComponentB() {
    return (
        <>
            <div className='componentB'>
                <p>Component B</p>
            </div>
            <ComponentC />
        </>
    )
}

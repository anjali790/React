import React from 'react'
import { ComponentD } from './ComponentD'

export function ComponentC() {
    return (
        <>
            <div className='componentC'>
                <p>Component C</p>
            </div>
            <ComponentD />
        </>
    )
}

import React from 'react';
import { ComponentB } from './ComponentB'

export default function ComponentA(props) {
    return (
        <>
            <div>ComponentA</div>
            <ComponentB name={props.name}/>
        </>
    )
}

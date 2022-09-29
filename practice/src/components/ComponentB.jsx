import React, {useContext} from 'react';
import { ComponentC } from './ComponentC';
import { PlaceContext } from '../App';

export function ComponentB() {
    const place = useContext(PlaceContext);
    return (
        <>
            <div>ComponentB - {place}</div>
            <ComponentC />
        </>
    )
}

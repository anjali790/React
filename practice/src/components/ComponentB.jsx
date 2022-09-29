import React from 'react';
import {ComponentC} from './ComponentC';

export function ComponentB(props) {
  return (
    <>
     <div>ComponentB</div>
     <ComponentC name={props.name}/>
    </>
    )
}

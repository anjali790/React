import React, {useContext} from 'react';
import { NameContext } from '../App';
import { BranchContext } from '../App';

export function ComponentC() {
    const name = useContext(NameContext);
    const branch = useContext(BranchContext);
  return (
    <>
    <div>ComponentC - My name is {name}. and my branch is {branch}.</div>
    </>
  )
}
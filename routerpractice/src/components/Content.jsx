import React from 'react';
import { useParams } from 'react-router-dom';

export function Content() {
    const {id} = useParams();
    console.log(id)
  return (
    <p className='content'>Content  {id}</p>
  )
}

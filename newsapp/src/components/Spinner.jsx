import React from 'react';
import loading from './loading.gif';

export default function Spinner() {
  return (
    <>
      <div className='loading_div'>
        <img className='loading_img' src={loading} alt=""></img>
      </div>
    </>
  )
}
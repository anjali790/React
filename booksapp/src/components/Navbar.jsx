import React from 'react';
import './Books.css';

export function Navbar(props) {
  return (
    <div className='navbar'>
      <div><h1>Book App</h1></div>
      <input className='inputBox' type="text" onChange={(e) => props.setSearch(e.target.value)} placeholder="enter book here"></input>
      <div>Your Favourites</div>
    </div>
  )
}

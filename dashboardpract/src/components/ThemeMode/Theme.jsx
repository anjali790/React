import React from 'react';

import { ColorItem } from './ColorItem';

import './Theme.css';

export function Theme() {
  const colors = ['blue', 'red', 'lightseagreen', 'lightblue', 'lightcoral', 'lightgrey'];

  const setTheme = (color) => {
    document.documentElement.style.setProperty('--bg-clr', color);
  }

  const setColor = (event) => {
    const currentColor = event.target.style.getPropertyValue('--bg-clr');
    setTheme(currentColor);
    console.log(currentColor);
    localStorage.setItem('color', currentColor)
  }

  return (
    <>
      <div className='color-switcher'>
        <button><i class="ri-settings-2-fill"></i></button>
        <h1 className='heading'>Select Color</h1>
        <div className='color-list'>
          {colors.map((color, idx) => <ColorItem color={color} setColor={setColor} />)}
        </div>
      </div>
    </>
  )
}
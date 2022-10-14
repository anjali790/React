import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
    <ul className='header_link'>
        <li><Link to="/" className='Link'>Home</Link></li>
        <li><Link to="about" className='Link'>About</Link></li>
        <li><Link to="contact" className='Link'>Contact</Link></li>
    </ul>
    </header>
  )
}

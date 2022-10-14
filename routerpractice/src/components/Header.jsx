import React from 'react';
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <ul className='header_link'>
                <li><NavLink to="/"
                    className={({ isActive }) => (isActive? "active-link" :"")}
                    end
                    id="Link"
                >Home</NavLink></li>
                <li><NavLink to="about" id="Link" className={({ isActive }) => (isActive? "active-link" :"")}>About</NavLink></li>
                <li><NavLink to="contact" id="Link" className={({ isActive }) => (isActive? "active-link" :"")}>Contact</NavLink></li>
            </ul>
        </header>
    )
}

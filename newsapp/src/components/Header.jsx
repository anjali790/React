import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export function Header(props) {
    const [theme, setTheme] = useState('dark-mode');

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const toggle = () => {
        if (theme === "dark-mode") {
            setTheme('light-mode');
        } else {
            setTheme('dark-mode');
        }
    }

    return (
        <>
            <header>
                <div className='header-container'>
                    <div className='headingDiv'>
                        <img width="280px" height="55px" src="https://i0.wp.com/therealnews.com/wp-content/uploads/2022/08/lockup-duochrome-bright-1.png?resize=2048%2C406&ssl=1" alt=""></img>
                    </div>
                    <div>
                        <input className='searchBox' type="text" onChange={(e) => props.setSearch(e.target.value)} placeholder="Search news by title"></input>
                    </div>
                    <div className='navbarDiv'>
                        <nav>
                            <ul className='header_links'>
                                <li><NavLink to='/' id='link' end>Headlines</NavLink></li>
                                <li><NavLink to='/.politics' id='link'>Politics</NavLink></li>
                                <li><NavLink to='./cricket' id='link'>Cricket</NavLink></li>
                                <li><NavLink to='./nature' id='link'>Science</NavLink></li>
                                <li><NavLink to='/about' id='link'>About</NavLink></li>
                                <li><NavLink to='/contact' id='link'>Contact Us</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='toggleDiv'>
                        <button className="btn" onClick={() => toggle()}><i class="fa-solid fa-moon"></i></button>
                    </div>
                </div>
            </header>
        </>
    )
}
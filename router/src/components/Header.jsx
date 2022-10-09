import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <>
            <header>
                <div className='header-container'>
                    <div className='headingDiv'>
                        <h1>Fastrack</h1>
                    </div>
                    <div className='navbarDiv'>
                        <nav>
                            <ul className='header_links'>
                                <li><Link to='/' className='link'>Home</Link></li>
                                <li ><Link to='/product' className='link'>Product</Link></li>
                                <li><Link to='/about' className='link'>About</Link></li>
                                <li><Link to='/contact' className='link'>Contact</Link></li>
                                <li><Link to='/login' className='link'>Login</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='cartDiv'>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </header>
        </>
    )
}
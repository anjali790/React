import React from 'react';
import { Link } from 'react-router-dom';

export function Sidebar({ text }) {
    console.log('props', text)
    return (
        <>
            <div className='sidebar'><h2>Sidebar</h2>
            {
                text === 'about' ? (
                    <p>
                        <Link to='/about1'>Content1</Link>
                        <Link to='/about2'>Content2</Link>
                    </p>
                ) :
                <>
                <p>React out to me</p>
                <p>anjali@aircampus.com</p>
                <p>Phone no. 1234567890</p>
                </>
            }
            </div>
        </>
    )
}

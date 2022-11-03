import React from 'react';

export function TestPractice() {
    return (
        <>
            <h1 title="vasanth">AirCampus</h1>
            <h3>React session</h3>
            <p>Learn html, css, js and react</p>
            <h3>React testing class</h3>
            <img src='' alt='img' />
            <div data-testid='custom'></div>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' placeholder='enter name here' value='vasanth' />
                </div>
                <div>
                    <label htmlFor='age'>Age</label>
                    <input type="text" id="age" />
                </div>
                <div>
                    <label htmlFor='location'>Location</label>
                    <select id='location'>
                        <option value='us'>US</option>
                        <option value='india'>India</option>
                        <option value='uk'>UK</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type='checkbox' />I agree to the above terms
                    </label>
                </div>
                <button>submit</button>
            </form>
        </>
    )
}

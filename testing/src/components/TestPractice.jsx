import React from 'react';

export function TestPractice() {
    return (
        <>
            <h1>AirCampus</h1>
            <h3>React session</h3>
            <h3>React testing class</h3>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' />
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

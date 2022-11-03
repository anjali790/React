import React from 'react';

export function TestPractice() {
    return (
        <>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' />
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

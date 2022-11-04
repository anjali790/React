import React, { useState } from 'react';
import './Notion.css';

export function Notion() {
    const [email, setEmail] = useState("");
    const [updateText, setUpdateText] = useState([]);
    const [popupcontainer, setPopcontainer] = useState(false);

    const handleClick = () => {
        setPopcontainer(true);
    }


    const submit = (e) => {
        e.preventDefault();

        if (email) {
            const details = {
                email: email,
            }

            setUpdateText([...updateText, details])
            setEmail("");
            localStorage.setItem('details', JSON.stringify(details))
        } else {
            alert('invalid details');
        }

    }

    return (
        <>
            <button className='share-btn' onClick={handleClick}> Share </button>
            <div>
                {popupcontainer ? (
                    <div className='popup-div'>
                        <form onSubmit={submit} className='form'>
                            <input type='text' placeholder='Add emails or people' value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }}></input>
                            <button type="submit">Invite</button>
                        </form>
                    </div>
                ) : null}
            </div>
        </>
    )
}
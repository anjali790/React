import React, { useState } from 'react';


export function SignUpForm() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [loggedInUser, setLoggedInUser] = useState(null)

    const validateAndSetUserName = (e) => {
        let value = e.target.value;
        if (value.length > 4) {
            setUserName(value)
        } else {
            console.log('Username is not valid.');
        }
    }

    const validateAndSetPassword = (passwordValue) => {
        if (passwordValue.length < 8) {
            console.log('password is short')
        } else if (passwordValue.length > 20) {
            console.log('password is too big')
        } else {
            setPassword(passwordValue)
        }
    }

    

    

    return (
        <>
            {
                loggedInUser ?
                    <>
                        <h1>Hello, {loggedInUser['userName']}</h1>
                        <button onClick={handleLogout}>Log Out</button>
                    </>
                    :
                    <form method='POST'>
                        <label htmlFor="username">Username</label>
                        <input name="username" id="username" type="text" onChange={(e) => validateAndSetUserName(e)} />
                        <br />
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" id="password" onChange={(e) => validateAndSetPassword(e.target.value)} />
                        <br />
                        <button type="submit" onClick={handleSubmit} disabled={userName.length == 0 || password.length == 0} >Login</button>
                    </form>
            }
        </>
    )
}
import React, { useState } from 'react'

export function StateWithObj() {
    const [name, setName] = useState({
        firstName: '',
        lastName: '',
        });


        let handlefname = (e) =>{
            setName({
                ...name,firstName : e.target.value,
            });
            console.log(e.target.value);
        }

        let handlelname = (e) =>{
            setName({
                ...name,lastName : e.target.value,
            });
            console.log(e.target.value);
        }

    return (
        <>
            <form>
                <div>
                    <label htmlFor='fname'>First Name</label>
                    <input type='text' id="fname" onChange={handlefname} value={name.firstName}></input>
                </div>
                <div>
                    <label htmlFor='lname'>Last Name</label>
                    <input type='text' id="lname" onChange={handlelname} value={name.lastName}></input>
                </div>
                <p>My name is {name.firstName}. My last name is {name.lastName}</p>
            </form>
        </>
    )
}

// import './Login.css';
// import React, { useState } from 'react';

// export function Login() {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   const validateAndSetUserEmail = (userNamevalue) => {
//     if (userNamevalue.length > 8) {
//       setUserName(userNamevalue)
//     } else {
//       console.log('Invalid username');
//     }
//   }

//   const validateAndSetPassword = (passwordValue) => {
//     if (passwordValue.length < 8) {
//       console.log('password is short');
//     } else if (passwordValue.length > 20) {
//       console.log('password is too big');
//     } else {
//       setPassword(passwordValue);
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ userName, password });
//     if (isAlreadyExist(userName, password)) {
//       loginUser(userName, password);
//     } else {
//       signup(userName, password);
//     }
//   }

//   const isAlreadyExist = (username, password) => {
//     let users = localStorage.getItem('users')
//     if (users) {
//       users = JSON.parse(users);

//       let filtered_user = users.filter((user) => user['userName'] === username && user['password'] === password)
//       if (filtered_user.length > 0) {
//         return true;
//       }
//       return false;
//     }
//   }

//   const loginUser = (username) => {
//     console.log(`logging in ${username}`)
//     let loggedInUser = {
//       'userName': username,
//     }
//     localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
//     setLoggedInUser(loggedInUser);
//   }

//   const signup = (username, password) => {
//     let users = localStorage.getItem('users')
//     if (users) {
//       users = JSON.parse(users);
//     } else {
//       users = [];
//     }

//     users.push({
//       'userName': username,
//       'password': password
//     })
//     users = JSON.stringify(users)
//     localStorage.setItem('users', users)
//   }

//   const handleLogout = () => {
//     setLoggedInUser(null);
//     localStorage.setItem('loggedInUser', null)
//     setUserName("");
//     setPassword("");
//   }

//   return (
//     <>
//       <section className='container'>
//         {
//           loggedInUser ?
//             <>
//               <div className='logoutDiv'>
//                 <h1 className='welcomeHeading'>Welcome, {loggedInUser['userName']}</h1>
//                 <div>
//                   <button onClick={handleLogout} className="logoutBtn">Log Out</button>
//                 </div>
//               </div>
//             </>
//             :
//             <form>
//               <fieldset>
//                 <h1>Login Form</h1>
//                 <div className='usernameDiv'>
//                   <label htmlFor="username" className='input'>Username</label>
//                   <input name="username" id="username" className='inputName input' type="text" onChange={(e) => validateAndSetUserEmail(e.target.value)} />
//                 </div>
//                 <div className='passwordDiv'>
//                   <label htmlFor="password" className='input'>Password</label>
//                   <input name="password" type="password" id="password" className='inputPassword input' onChange={(e) => validateAndSetPassword(e.target.value)} />
//                 </div>
//                 <div className='btnDiv'>
//                   <button className='btn' type="submit" onClick={handleSubmit}>Login</button>
//                 </div>
//               </fieldset>
//             </form>
//         }
//       </section>
//     </>
//   )
// }







import React, { useState } from "react";
import './Login.css';

export function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [updateText, setUpdateText] = useState([]);


  const submit = (e) => {
    e.preventDefault();

    if (email && password) {
      const details = {
        name: name,
        email: email,
        password: password
      }

      setUpdateText([...updateText, details]);
      setName("");
      setEmail("");
      setPassword("");
      localStorage.setItem('details', JSON.stringify(details))
    } else {
      alert('invalid details');
    }

  }


  return (
    <>
      <section className="container">
        <form onSubmit={submit}>
          <fieldset>
            <div className="usernameDiv">
              <label htmlFor="name" className="input">Name</label>
              <input type="text" name="name" id="name" className='inputName input' value={name} onChange={(e) => {
                setName(e.target.value)
              }} />
            </div>
            <div className="usernameDiv">
              <label htmlFor="email" className="input">Email</label>
              <input type="text" name="email" id="email" className='inputName input' value={email} onChange={(e) => {
                setEmail(e.target.value)
              }} />
            </div>
            <div className="passwordDiv">
              <label htmlFor="password" className="input">Password</label>
              <input type="password" name="password" id="password" className='inputName input' value={password} onChange={(e) => {
                setPassword(e.target.value)
              }} />
            </div>
            <div className="btnDiv">
              <button className="btn" type="submit">Login</button>
            </div>
          </fieldset>

        </form>
        <div>
          {
            updateText.map((data) => {
              return (
                <>
                  <div className="logoutDiv">
                    <h1 className="welcomeHeading">Welcome, {data.name}!</h1>
                    {/* <div>
                                            <button onClick={handleLogout} className="logoutBtn">Log Out</button>
                                        </div> */}
                  </div>

                </>
              )
            })
          }
        </div>

      </section>

    </>
  )
}
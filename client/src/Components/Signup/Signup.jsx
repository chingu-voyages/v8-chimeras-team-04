import React, { useState } from 'react';
import './Signup.scss';

export default function Signup() {
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirm, setConfirm ] = useState('');

  return (
    <div className="signup">
      <div className="signup-modal">
        <div className="signup-modal-heading">
          <h3>Sign Up</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Name: </label>
          <input 
            type="text" 
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          {/* <br/> */}
          <label htmlFor="email">Email Address: </label>
          <input 
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {/* <br/> */}
          <label htmlFor="password">Password: </label>
          <input 
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {/* <br/> */}
          <label htmlFor="confirm">Confirm Password: </label>
          <input 
            type="password"
            name="confirm"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
          />
          {/* <br/> */}
          <button>Sign Up!</button>
        </form>
      </div>
    </div>
  )

  function handleSubmit(e) {
    e.preventDefault();
    if(!username || !email || !password || !confirm) {
      alert('All Fields are Required');
      return;
    } else if(password !== confirm) {
      alert('Password Not Matching');
      return;
    }
    const loginData = new FormData(e.target);

    // console.log(loginData.get(username));
    // console.log(loginData.get('email'));
    // console.log(loginData.get('confirm'));

    fetch('/api/form-submit-url', {
      method: 'POST',
      body: loginData
    });
  }
}
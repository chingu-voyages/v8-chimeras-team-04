import React, { useState } from 'react';
import './Login.scss';

export default function Login() {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  return (
    <div className="login">
      <div className="login-modal">
        <div className="login-modal-heading">
          <h3>Login</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            name="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password: </label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button>Log In</button>
        </form>
      </div>
    </div>
  )

  function handleSubmit(e) {
    e.preventDefault();
    if(username.length < 4 && password.length < 4) return;

    const data = new FormData(e.target);
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.status === 200) {
        this.props.history.push('/');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in. Please Try Again');
    })
  }
}


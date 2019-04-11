import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Log In</button>
      </form>
    </div>
  )

  function handleSubmit(e) {
    e.preventDefault();
    if(username.length < 4 && password.length < 4) return;
    axios.post('/auth', { username, password })
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }
}


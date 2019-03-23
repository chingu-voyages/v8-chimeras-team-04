import React, { useState } from 'react';

export default function Login() {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  return (
    <div className="login">
      <LoginForm username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
      {console.log(username, password)}
    </div>
  )
}

function LoginForm({ username, setUsername, password, setPassword }) {
  const [ value, setValue ] = useState("");
  const [ pw, setPw ] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(value.length < 4 && pw.length < 4) return;
    setUsername(value);
    setPassword(pw);
    setValue('');
    setPw('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username: </label>
      <input 
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <label>Password: </label>
      <input
        type="password"
        value={pw}
        onChange={e => setPw(e.target.value)}
      />
      <button onClick={handleSubmit}>Log In</button>
    </form>
  )
}
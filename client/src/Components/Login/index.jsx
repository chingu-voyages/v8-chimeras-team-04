import React, { useState, useContext } from 'react';
import axios from 'axios';
import './login.scss';
import FullAppContext from '../../context/FullAppContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [login, setLogin] = useState('login');
  const { setCurrentUser, setAuth } = useContext(FullAppContext);

  return (
    <div className="login">
      <div className="login-btns">
        {login === 'signup' && (
          <button className="login-btn" onClick={handleClick('login')}>
            Sign up
          </button>
        )}
        {login === 'login' && (
          <button className="login-btn" onClick={handleClick('signup')}>
            Log in
          </button>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        {login === 'signup' && <label htmlFor="confirm">Confirm Password: </label>}
        {login === 'signup' && (
          <input
            type="password"
            name="confirm"
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
          />
        )}
        <span>{error}</span>
        <input type="submit" value="Submit" className="login-submit" />
      </form>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();
    const url = login === 'signup' ? '/signup' : '/login';
    axios.post(url, { username, password, passwordConfirm }).then(({ data }) => {
      if (data.error) {
        setError(data.error);
        setAuth(false);
        console.log('error');
      } else {
        setError('');
        setCurrentUser(data.newUser);
        setAuth(true);
      }
    });
  }

  function handleClick(login) {
    return () => setLogin(login);
  }
}

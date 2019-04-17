import React, {useState} from 'react';
import axios from 'axios';
import './Signup.scss';

export default function Signup() {
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState('');

  if (isAuth) return <div style={{color: 'red', fontSize: '50px'}}>{username} signed up!</div>
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        {error.length > 0 && <div style={{color: 'red'}}>{error}</div>}
        <label htmlFor="username">Name: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email Address: </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <label htmlFor="confirm">Confirm Password: </label>
        <input
          type="password"
          name="confirm"
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
        />
        <input type="submit" value="Sign Up!" />
      </form>
    </div>
  )

  function handleSubmit(e) {
    e.preventDefault();

    axios.post('/signup', {username, password, passwordConfirm})
      .then(({data}) => {
        console.log(data)
        if (data.error) {
          setError(data.error)
          setIsAuth(false);
        } else {
          setError('')
          setIsAuth(true);
        }
      });
  }
}
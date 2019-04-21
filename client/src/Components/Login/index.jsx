import React, { useState } from 'react';
import axios from 'axios';
import './login.scss';

export default function Login({ auth, setAuth, setCurrentUser }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [error, setError] = useState('');
	const [login, setLogin] = useState('signup');

	return (
		<div className="login">
			<div className="login-btns">
				{login === 'signup' && <button onClick={handleClick('login')}>Sign up</button>}
				{login === 'login' && <button onClick={handleClick('signup')}>Log in</button>}
			</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username: </label>
				<input
					type="text"
					name="username"
					value={username}
					onChange={e => setUsername(e.target.value)}
					autoComplete={false}
				/>
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
				<input type="submit" value="Submit" />
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
			} else {
				setError('');
				setAuth(true);
				console.log(data);
				setCurrentUser(data.newUser.username);
			}
		});
	}

	function handleClick(login) {
		return () => setLogin(login);
	}
}

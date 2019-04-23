import React, { useState } from 'react';
import axios from 'axios';

import ok from '../../img/ok.svg';
import jobHunt from '../../img/job_hunt.svg';
import './login.scss';

export default function Login({ auth, setAuth, setCurrentUser }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [error, setError] = useState('');
	const [login, setLogin] = useState('login');

	return (
		<div className="login">

			<div className="login-landing-page">
				<img src={jobHunt} className="login-landing-page-main" />
				<div className="login-landing-page-sub">
					<img src={ok} />
					<p>Create a FREE account to easily keep track of your job applications.</p>
				</div>
				<div className="login-landing-page-sub">
					<img src={ok} />
					<p>Track your rate of success at each stage in the process to identify areas to focus to imporve success.</p>
				</div>
			</div>


			<div className="login-forms">
				{/* <div className="login-btns">
						<button onClick={handleClick('login')}>Log In</button>
						<button onClick={handleClick('signup')}>Sign Up</button>

				</div> */}

				<h2 className="login-forms-heading">
					{
						login === 'login' ? "Log In" : "Sign Up"
					}
				</h2>

				<form onSubmit={handleSubmit}>
					<label htmlFor="username">Username </label>
					<input
						type="text"
						name="username"
						value={username}
						onChange={e => setUsername(e.target.value)}
						autoComplete={false}
					/>
					<label htmlFor="password">Password </label>
					<input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
					{login === 'signup' && <label htmlFor="confirm">Confirm Password </label>}
					{login === 'signup' && (
						<input
							type="password"
							name="confirm"
							value={passwordConfirm}
							onChange={e => setPasswordConfirm(e.target.value)}
						/>
					)}
					{
						login === 'login' ? 
						<button className="redirect" onClick={handleClick('signup')}>
							Don't have an account yet? Sign up for FREE
						</button>
						:
						<button className="redirect" onClick={handleClick('login')}>
							Already have an account? Sign in here
						</button>
					}
					<span>{error}</span>
					<br/>
					<input type="submit" value="Submit" />
				</form>
			</div>
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

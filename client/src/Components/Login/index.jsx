import React, { useState } from 'react';
import axios from 'axios';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

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
					<FontAwesomeIcon className="icon" icon={faCheck} />
					<p>Create a FREE account to easily keep track of your job applications.</p>
				</div>
				<div className="login-landing-page-sub">
					<FontAwesomeIcon className="icon" icon={faCheck} />
					<p>Track your rate of success at each stage in the process to identify areas to focus to imporve success.</p>
				</div>
			</div>


			<div className="login-forms">

				<h3 className="login-forms-heading">
					{
						login === 'login' ? "Log In" : "Sign Up"
					}
				</h3>

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
					
					<span className="error">{error}</span>
					{
						login === 'login' ? 
						<div className="redirect">
							Don't have an account? Sign up
							<span className="redirect-btn" onClick={handleClick('signup')}>
								 <strong> here</strong>
							</span>
						</div>
						:
						<div className="redirect">Already have an account? Sign in
							<span className="redirect-btn" onClick={handleClick('login')}>
								<strong> here</strong>
							</span>
						</div>
					}
					<br/>
					<input type="submit" value="Submit" className="login-submit" />
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

import React from 'react';

import './header.scss';

export default function Header({ currentUser, auth, setAuth }) {
	return (
		<header>
			<h1>Job Tracker</h1>
			<h1>{auth ? currentUser : ''}</h1>
			
				{
					!auth ? 
						<div className="header-btns">
							<button className="header-login-btn">Log In</button>
							<button className="header-signup-btn">Sign Up</button>
						</div>
				  : 
						<div className="header-btns">
							<button onClick={handleClick}className="header-logout-btn">Log Out</button>
						</div>
				}
		</header>
	);

	function handleClick() {
		setAuth(false);
	}
}

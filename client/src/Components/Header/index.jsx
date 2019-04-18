import React from 'react';

import './header.scss';

export default function Header({ currentUser }) {
	return (
		<header>
			<h1>Job Tracker</h1>
			<h1>{currentUser}</h1>
		</header>
	);
}

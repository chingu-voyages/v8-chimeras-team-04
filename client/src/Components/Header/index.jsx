import React from 'react';

import './header.scss';

export default function Header({ currentUser }) {
	return (
		<header>
			<h1 className="header">Job Tracker</h1>
			<h1>{currentUser}</h1>
		</header>
	);
}

import React, { useState } from 'react';

import AppList from './components/AppList/AppList.jsx';
import Login from './components/Login';
import Header from './components/Header';

export default function App() {
	const [auth, setAuth] = useState(false);
	const [currentUser, setCurrentUser] = useState('');

	return (
		<div>
			<Header currentUser={currentUser} auth={auth} setAuth={setAuth} />
			{auth ? <AppList /> : <Login auth={auth} setAuth={setAuth} setCurrentUser={setCurrentUser} />}
		</div>
	);
}

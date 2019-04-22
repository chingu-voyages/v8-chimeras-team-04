import React, { useState } from 'react';

import AppList from './components/AppList/AppList.jsx';
import Login from './components/Login/index.jsx';
import Header from './components/Header/index.jsx';

export default function App() {
	const [auth, setAuth] = useState(false);
	const [currentUser, setCurrentUser] = useState('');

	return (
		<div>
			<Header currentUser={currentUser} />
			<div className="full-app">
				{auth ? <AppList /> : <Login auth={auth} setAuth={setAuth} setCurrentUser={setCurrentUser} />}
			</div>
		</div>
	);
}

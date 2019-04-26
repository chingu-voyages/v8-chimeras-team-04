import React, { useState } from 'react';

import AppList from './components/AppList/AppList.jsx';
import FullView from './components/FullView/FullView.jsx';
import Login from './components/Login/';
import Header from './components/Header/';
import Summary from './components/Summary/Summary.jsx';

export default function App() {
	const [auth, setAuth] = useState(false);
	const [currentUser, setCurrentUser] = useState('');

	return (
		<div>
			<Header currentUser={currentUser} />
			<div className="full-app">
				{auth ? 
					<FullView /> : 
					<Login auth={auth} setAuth={setAuth} setCurrentUser={setCurrentUser} />}
			</div>
		</div>
	);
}

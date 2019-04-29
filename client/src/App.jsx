import React, { useState } from 'react';


import FullView from './components/FullView/FullView.jsx';
import Summary from './components/Summary/Summary.jsx';
import AppList from './components/AppList';
import Login from './components/Login';
import Header from './components/Header';

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

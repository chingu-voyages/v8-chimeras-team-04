import React, { useState } from 'react';

import AppList from './Components/AppList';
import Login from './Components/Login';
import Header from './Components/Header';

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

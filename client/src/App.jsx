import React, { useState } from 'react';

import AppList from './components/AppList';
import Login from './components/Login';
import Header from './components/Header';
import FullAppContext from './context/FullAppContext';

export default function App() {
  const [auth, setAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  return (
    <FullAppContext.Provider value={{ currentUser, setCurrentUser, setAuth, auth }}>
      <Header />
      <div className="full-app">{auth ? <AppList /> : <Login />}</div>
    </FullAppContext.Provider>
  );
}

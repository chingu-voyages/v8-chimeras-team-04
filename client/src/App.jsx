import React, { useState } from 'react';

import FullView from './components/FullView';
import Login from './components/Login';
import Header from './components/Header';
import FullAppContext from './context/FullAppContext';

export default function App() {
  const [auth, setAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [apps, setApps] = useState([]);

  return (
    <FullAppContext.Provider value={{ apps, setApps, currentUser, setCurrentUser, setAuth, auth }}>
      <Header />
      <div className="full-app">{auth ? <FullView /> : <Login />}</div>
    </FullAppContext.Provider>
  );
}

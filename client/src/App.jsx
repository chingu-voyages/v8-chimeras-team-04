import React, { useState } from 'react';

import FullView from './component/FullView';
import Login from './component/Login';
import Header from './component/Header';
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

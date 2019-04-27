import React, { useContext } from 'react';

import './header.scss';
import FullAppContext from '../../context/FullAppContext';

export default function Header() {
  const { setCurrentUser, currentUser, setAuth, auth } = useContext(FullAppContext);

  return (
    <header>
      <h1 className="header">Job Tracker</h1>
      {currentUser && <h1>{currentUser.username}</h1>}
      {auth && <button onClick={handleClick}>Log out</button>}
    </header>
  );

  function handleClick(e) {
    e.preventDefault();
    setCurrentUser('');
    setAuth(false);
  }
}

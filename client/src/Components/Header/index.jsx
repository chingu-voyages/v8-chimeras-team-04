import React, { useContext } from 'react';

import './header.scss';
import FullAppContext from '../../context/FullAppContext';

export default function Header() {
  const { setCurrentUser, currentUser, setAuth, auth } = useContext(FullAppContext);

  return (
    <header>
	  <h1 className="header">Job Tracker</h1>
	  <div>
      {currentUser && <div className="user"><i className="fas fa-user"></i><h3 className="username">{currentUser.username}</h3></div>}
      {auth && (
        <button className="logout-btn" onClick={handleClick}>
          Log out
        </button>
	  )}
	  </div>
    </header>
  );

  function handleClick(e) {
    e.preventDefault();
    setCurrentUser('');
    setAuth(false);
  }
}

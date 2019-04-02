import React from 'react';

import './header.scss';

export default function Header() {
  return (
    <header>
      ☀︎ APP TRACKER
      <div className="header__btns">
        <a className="btns login">login</a>
        <a className="btns signup">sign up</a>
      </div>
    </header>
  )
}

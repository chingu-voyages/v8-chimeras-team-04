import React, { useState } from 'react';

import Login from './components/Login';
import Header from './components/Header';

export default function App() {
  const [data, setData] = useState();

  return (
    <div>
      <Login />
      <Header />
      <p>Msg from react</p>
      <p>{data}</p>
      <button onClick={handleClick}>Fetch msg from backend</button>
    </div>
  )

  function handleClick(e) {
    e.preventDefault();

    fetch('/chimeras')
      .then(res => res.json())
      .then(data => setData(data.msg))
      .catch(err => {
        setData('Error: make sure the backend is running! `npm run server`')
        console.log(`fetch failed: ${err}`)
      })
  }
}
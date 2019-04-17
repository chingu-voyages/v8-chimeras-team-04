import React, { useState, useEffect } from 'react';

import AppListing from '../AppListing/AppListing.jsx';
import AppModal from '../AppModal/AppModal.jsx';

import './AppList.scss';

export default function AppList() {


  const [apps, setApps] = useState([]);
  
  const [appModal, toggleAppModal] = useState(false);

  useEffect(()=> {
    fetch('/getAllApps/')
      .then(res => res.json())
      .then(data => setApps(data));
  }, [])

  return (
    <div className="appList-container">
      <h1 className="appList-title">Applications</h1>
      <button 
        onClick={() => toggleAppModal(true)}
        className="appList-btn-add">+ Add App</button>
        {
          apps.map((app, index)=> (
            <AppListing
            index={index}
            position={app.position}
            company={app.company}
            />
          ))
        }
      
      <AppModal
        appModal={appModal}
        toggleAppModal={toggleAppModal}
      />
    </div>
  )
}
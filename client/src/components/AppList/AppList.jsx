import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AppListing from '../AppListing/AppListing.jsx';
import AppModal from '../AppModal/AppModal.jsx';

import './AppList.scss';

export default function AppList() {
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [fullView, setFullView] = useState(false);
  const [appModal, toggleAppModal] = useState(false);
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetchJobApps();
  }, []);

  return (
    <div className="appList-container">
      <h1 className="appList-title">Applications</h1>
      <button onClick={() => toggleAppModal(true)} className="appList-btn-add">
        + Add App
      </button>
      {apps.map(app => {
        const { position, company, id } = app;
        console.log(app);
        return (
          <AppListing key={id} position={position} company={company} fullView={fullView} setFullView={setFullView} />
        );
      })}
      <AppModal setApps={setApps} appModal={appModal} toggleAppModal={toggleAppModal} />
    </div>
  );

  function fetchJobApps() {
    axios.get('/jobs').then(({ data }) => setApps(data));
  }
}

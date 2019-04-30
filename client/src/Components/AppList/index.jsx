import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import AppListing from '../AppListing';
import AppModal from '../AppModal';
import AppContext from '../../context/AppContext';
import FullAppContext from '../../context/FullAppContext';

import './applist.scss';

export default function AppList() {
  const [appModal, toggleAppModal] = useState(false);
  const [apps, setApps] = useState([]);
  const { currentUser } = useContext(FullAppContext);

  useEffect(() => {
    fetchJobApps();
  }, []);

  return (
    <AppContext.Provider value={{ toggleAppModal, appModal, setApps }}>
      <div className="appList-container">
        <h1 className="appList-title">Applications</h1>
        <button onClick={() => toggleAppModal(true)} className="appList-btn-add">
          + Add App
        </button>
        {apps.map(app => {
          const { position, company, _id, stage } = app;

          return <AppListing key={_id} id={_id} position={position} company={company} stage={stage} />;
        })}
        <AppModal />
      </div>
    </AppContext.Provider>
  );

  function fetchJobApps() {
    axios.post('/jobs', { currentUser }).then(data => setApps(data.data));
  }
}

import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';

import AppListing from '../AppListing';
import AppModal from '../AppModal';
import AppContext from '../../context/AppContext';
import FullAppContext from '../../context/FullAppContext';

import './AppList.scss';

export default function AppList() {
  const [appModal, toggleAppModal] = useState(false);
  const { currentUser, apps, setApps } = useContext(FullAppContext);
  const inputRef = useRef();

  useEffect(() => {
    fetchJobApps();
  }, []);

  useEffect(() => {
    inputRef.current.scrollTo(0, 0);
  });

  return (
    <AppContext.Provider value={{ toggleAppModal, appModal, setApps }}>
      <div className="appList-container">
        <h1 className="appList-title">Applications</h1>
        <button onClick={() => toggleAppModal(true)} className="appList-btn-add">
          + Add App
        </button>
        <div ref={inputRef} className="app-listing-display">
          {apps.map(app => {
            const { position, company, _id, stage, notes } = app;

            return <AppListing key={_id} id={_id} position={position} company={company} stage={stage} notes={notes} />;
          })}
        </div>
        <AppModal />
      </div>
    </AppContext.Provider>
  );

  function fetchJobApps() {
    axios.post('/jobs', { currentUser }).then(data => setApps(data.data));
  }
}

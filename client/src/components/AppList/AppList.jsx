import React, { useState, useEffect } from 'react';
import { getAllJobs } from '../../helpers/DBHelper';

import AppContext from '../../context/AppContext';
import AppListing from '../AppListing/AppListing.jsx';
import AppModal from '../AppModal/AppModal.jsx';

import './AppList.scss';

export default function AppList() {
  const [appModal, toggleAppModal] = useState(false);
  const [apps, setApps] = useState([]);

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
          const { position, company, id } = app;
          console.log(app);
          return (
            <AppListing key={id} position={position} company={company} />
          );
        })}
        <AppModal />
      </div>
    </AppContext.Provider>
  );

  function fetchJobApps() {
    getAllJobs().then(({ data }) => setApps(data));
  }
}

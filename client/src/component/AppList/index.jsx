import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


import AppListing from '../AppListing';
import AppModal from '../AppModal';
import AppContext from '../../context/AppContext';
import FullAppContext from '../../context/FullAppContext';

import './AppList.scss';

export default function AppList() {
  const [appModal, toggleAppModal] = useState(false);
  const { currentUser, apps, setApps } = useContext(FullAppContext);
  const [ currentStage, setCurrentStage ] = useState('submitted');
  const [ isVisible, setIsVisible ] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    fetchJobApps();
  }, []);

  useEffect(() => {
    inputRef.current.scrollTo(0, 0);
  });

  return (
    <AppContext.Provider value={{ toggleAppModal, appModal, setApps, deleteJob, modifyJob }}>
      <div className="appList-container">
        <h1 className="appList-title">Applications</h1>
        <div className="appList-buttons">
          <div className="blank-space"></div>
          <div className="filter-heading"><p>Filter By: </p></div>
          <button onClick={() => toggleAppModal(true)} className="appList-btn-add">
            + Add App
          </button>
          <div className="dropdown">
            <button className="dropbtn" onClick={() => setIsVisible(true)}>{currentStage === 'submitted' ? 'All' : currentStage}<span><FontAwesomeIcon className="dropIcon" icon={faCaretDown}/></span></button>
            {isVisible &&
              <div className="dropdown-content">
                <button className="dropdown-content-btn" onClick={() => {setCurrentStage('submitted'); setIsVisible(!isVisible)}}>All</button>
                <button className="dropdown-content-btn" onClick={() => {setCurrentStage('challenge'); setIsVisible(!isVisible)}}>challenge</button>
                <button className="dropdown-content-btn" onClick={() => {setCurrentStage('phone'); setIsVisible(!isVisible)}}>phone</button>
                <button className="dropdown-content-btn" onClick={() => {setCurrentStage('onsite'); setIsVisible(!isVisible)}}>onsite</button>
                <button className="dropdown-content-btn" onClick={() => {setCurrentStage('offer'); setIsVisible(!isVisible)}}>offer</button>
              </div>
            }
          </div>
        </div>
        <div ref={inputRef} className="app-listing-display">
          {
            currentStage !== 'submitted' ?
            apps.filter(app => app.stage === currentStage)
            .map(app => {
            const { position, company, _id, stage, notes } = app;
            let stageVal = currentStage === 'submitted' ? stage : currentStage;

            return <AppListing key={_id} id={_id} position={position} company={company} stage={stageVal} notes={notes} />;
          })
          :
            apps.map(app => {
            const { position, company, _id, stage, notes } = app;
            let stageVal = currentStage === 'submitted' ? stage : currentStage;

            return <AppListing key={_id} id={_id} position={position} company={company} stage={stageVal} notes={notes} />;
          })
          
          }
        </div>
        <AppModal />
      </div>
    </AppContext.Provider>
  );

  function fetchJobApps() {
    axios.post('/jobs', { currentUser }).then(data => setApps(data.data));
  }

  function deleteJob(_id) {
    axios.delete('/removeJob', { data: { _id } }).then(data => setApps(data.data));
  }

  function modifyJob(app) {
    axios.put('/updateJob', app).then(data => setApps(data.data));
  }
}

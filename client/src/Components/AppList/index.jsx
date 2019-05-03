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
    <AppContext.Provider value={{ toggleAppModal, appModal, setApps }}>
      <div className="appList-container">
        <h1 className="appList-title">Applications</h1>
        <button onClick={() => toggleAppModal(true)} className="appList-btn-add">
          + Add App
        </button>
        <div className="dropdown">
          <button className="dropbtn" onClick={() => setIsVisible(true)}>{currentStage === 'submitted' ? 'All' : currentStage}<span><FontAwesomeIcon className="dropIcon" icon={faCaretDown}/></span></button>
          {isVisible &&
            <div className="dropdown-content">
              <button className="dropdown-content-btn" onClick={() => {setCurrentStage('submitted'); setIsVisible(false)}}>All</button>
              <button className="dropdown-content-btn" onClick={() => {setCurrentStage('challenge'); setIsVisible(false)}}>challenge</button>
              <button className="dropdown-content-btn" onClick={() => {setCurrentStage('phone'); setIsVisible(false)}}>phone</button>
              <button className="dropdown-content-btn" onClick={() => {setCurrentStage('onsite'); setIsVisible(false)}}>onsite</button>
              <button className="dropdown-content-btn" onClick={() => {setCurrentStage('offer'); setIsVisible(false)}}>offer</button>
            </div>
          }
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
}

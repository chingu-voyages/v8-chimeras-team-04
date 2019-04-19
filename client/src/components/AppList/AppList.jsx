import React, { useState, useEffect, useReducer } from 'react';

import AppListing from '../AppListing/AppListing.jsx';
import AppModal from '../AppModal/AppModal.jsx';
import AppReducer from '../../reducers/appReducer';

import './AppList.scss';

export default function AppList() {


  const [apps, dispatch] = useReducer(AppReducer,[]);
  
  const [appModal, toggleAppModal] = useState(false);

  useEffect(()=> {
    dispatch(apps, {type: 'FETCH_APPS'});
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
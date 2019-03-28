import React, { useState } from 'react';

import AppListing from '../AppListing/AppListing.jsx';

import './AppList.scss';

export default function AppList() {
  const [position, setPosition] = useState(`Senior Front End Developer`);
  const [company, setCompany] = useState('iHerb');

  
    return (
      <div className="appList-container">
      <h1 className="appList-title">Applications</h1>  
      <AppListing 
      position={position}
      company={company}
      />
      </div>
    )
}
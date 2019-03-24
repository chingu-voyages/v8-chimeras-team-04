import React, { useState } from 'react';

import AppListing from '../AppListing/AppListing.jsx';

import './AppList.css';

export default function AppList() {
  
    return (
      <div className="appList-container">
      <h1 className="appList-title">Applications</h1>  
      <AppListing />
      </div>
    )
}
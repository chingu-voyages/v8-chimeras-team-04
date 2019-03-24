import React, { useState } from 'react';

import './AppListing.css';

export default function AppListing() {
    const [position, setPosition] = useState('Senior Front End Developer');
    const [company, setCompany] = useState('iHerb');
  
    return (
      <div className="app-listing">
        <h2 className="position">{position}</h2>
        <h2 className="company">{company}</h2>
      </div>
    )
}
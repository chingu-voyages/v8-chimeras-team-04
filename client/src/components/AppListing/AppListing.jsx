import React, { useState } from 'react';

import './AppListing.scss';


export default function AppListing(props) {
    
    return (
      <div className="app-listing">
        <h2 className="position">{props.position}</h2>
        <h2 className="company">{props.company}</h2>
      </div>
    )
}
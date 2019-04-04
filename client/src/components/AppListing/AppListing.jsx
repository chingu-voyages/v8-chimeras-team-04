import React, { useState } from 'react';

import FullApp from '../FullApp/FullApp.jsx';

import './AppListing.scss';


export default function AppListing(props) {

  return (
    <div className="app-listing">
      <div className="listing-categories-main">
        <h2 className="position">{props.position}</h2>
        <h2 className="company">{props.company}</h2>
        <button
          onClick={() => props.setFullView(!props.fullView)}
          className="expand-button">
          { props.fullView ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i> }
          
        </button>
      </div>
      {props.fullView ?
        <FullApp /> :
        ''
      }
    </div>
  )
}
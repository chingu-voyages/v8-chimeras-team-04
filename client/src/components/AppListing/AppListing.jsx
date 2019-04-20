import React, { useState } from 'react';


import FullApp from '../FullApp/FullApp.jsx';


import './AppListing.scss';



export default function AppListing(props) {

  const [fullView, setFullView] = useState(false);

  return (
    <div className="app-listing">
      <div className="listing-categories-main">
        <h2 className="position">{props.position}</h2>
        <h2 className="company">{props.company}</h2>
        <button
          onClick={() => setFullView(!fullView)}
          className="expand-button">
          { fullView ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i> }
          
        </button>
      </div>
      {fullView ?
        <FullApp /> :
        ''
      }
    </div>
  )
}
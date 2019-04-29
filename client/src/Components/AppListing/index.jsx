import React, { useState } from 'react';
import FullAppContext from '../../context/FullAppContext';

import FullApp from '../FullApp';
import './applisting.scss';

export default function AppListing(props) {
  const [fullView, setFullView] = useState(false);

  return (
    <div className="app-listing">
      <div className="listing-categories-main">
        <h2 className="position">{props.position}</h2>
        <h2 className="company">{props.company}</h2>
        <button onClick={() => setFullView(!fullView)} className="expand-button">
          {fullView ? <i className="fas fa-minus" /> : <i className="fas fa-plus" />}
        </button>
      </div>
      <FullAppContext.Provider value={{ fullView }}>
        <FullApp />
      </FullAppContext.Provider>
    </div>
  );
}

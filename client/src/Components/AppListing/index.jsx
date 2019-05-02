import React, { useState } from 'react';

import FullApp from '../FullApp';
import './AppListing.scss';

export default function AppListing({ id, position, company, stage, notes }) {
  const [fullView, setFullView] = useState(false);

  return (
    <div className="app-listing">
      <div className="listing-categories-main">
        <h2 className="position">{position}</h2>
        <h2 className="company">{company}</h2>
        <button onClick={() => setFullView(!fullView)} className="expand-button">
          {fullView ? <i className="fas fa-minus" /> : <i className="fas fa-plus" />}
        </button>
      </div>
      <FullApp fullView={fullView} id={id} stage={stage} notes={notes} />
    </div>
  );
}

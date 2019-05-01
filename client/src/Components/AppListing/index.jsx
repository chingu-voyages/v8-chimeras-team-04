import React, { useState, useContext } from 'react';
import FullAppContext from '../../context/FullAppContext';
import AppContext from '../../context/AppContext';

import FullApp from '../FullApp';
import './AppListing.scss';

export default function AppListing(props) {
  const [fullView, setFullView] = useState(false);
  const { deleteJob } = useContext(AppContext);

  return (
    <div className="app-listing">
      <div className="listing-categories-main">
        <h2 className="position">{props.position}</h2>
        <h2 className="company">{props.company}</h2>
        <button onClick={()=> deleteJob(props._id) }  className="delete-app"><i className="fas fa-trash"></i></button>
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

import React, { useState, useContext } from 'react';
import FullAppContext from '../../context/FullAppContext';
import AppContext from '../../context/AppContext';
import EditableName from '../EditableName';

import FullApp from '../FullApp';
import './AppListing.scss';

export default function AppListing({ id, position, company, stage }) {
  const [fullView, setFullView] = useState(false);
  const { deleteJob, modifyJob } = useContext(AppContext);

  const handleNameChange = (changedValue,changedProperty) => {
    let app;
    if (changedProperty==='position') {
      app = {
        _id : id,
        position: changedValue,
        company: company
      }
    } else {
      app = {
        _id : id,
        company: changedValue,
        position: position
      }
    }
    modifyJob(app);
  }

  return (
    <div className="app-listing">
      <div className="listing-categories-main">
        <EditableName value={position} classValue={"position"} handleNameChange={handleNameChange} />
        <EditableName value={company} classValue={"company"} handleNameChange={handleNameChange}/>
        <button onClick={()=> deleteJob(id) }  className="delete-app"><i className="fas fa-trash"></i></button>
        <button onClick={() => setFullView(!fullView)} className="expand-button">
          {fullView ? <i className="fas fa-minus" /> : <i className="fas fa-plus" />}
        </button>
      </div>
      <FullApp fullView={fullView} id={id} stage={stage} />
    </div>
  );

}

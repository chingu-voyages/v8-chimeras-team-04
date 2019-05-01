import React, { useState, useContext } from 'react';
import FullAppContext from '../../context/FullAppContext';
import AppContext from '../../context/AppContext';
import EditableName from '../EditableName';

import FullApp from '../FullApp';
import './AppListing.scss';

export default function AppListing(props) {
  const [fullView, setFullView] = useState(false);
  const { deleteJob, modifyJob } = useContext(AppContext);

  const handleNameChange = (changedValue,changedProperty) => {
    let app;
    if (changedProperty==='position') {
      app = {
        _id : props._id,
        position: changedValue,
        company: props.company
      }
    } else {
      app = {
        _id : props._id,
        company: changedValue,
        position: props.position
      }
    }
    props.modifyJob(app);
  }

  return (
    <div className="app-listing">
      <div className="listing-categories-main">
        <EditableName value={props.position} classValue={"position"} handleNameChange={handleNameChange} />
        <EditableName value={props.company} classValue={"company"} handleNameChange={handleNameChange}/>
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

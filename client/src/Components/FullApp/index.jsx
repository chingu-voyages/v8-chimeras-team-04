import React, { useState, useContext } from 'react';
import AppStage from '../AppStage/index';
import FullAppContext from '../../context/FullAppContext';
import './fullapp.scss';

export default function FullApp() {
  const { fullView } = useContext(FullAppContext);
  const [note, setNotes] = useState();

  return (
    <div className={fullView ? 'app-expanded' : 'app-expanded-hidden'}>
      <div className="app-status-list">
        <AppStage />
      </div>

      <div className="app-notes">
        <h3 className="app-notes-title">notes:</h3>
        
        <p className="app-notes-content">
          {note}
        </p>

      <form>
              <textarea
                
                name="app-notes"
                placeholder="Application Notes ..."
                className="form-notes-before"
                value={note}
                onChange={e => setNotes(e.target.value)}
              />
            <button type="submit" >SAVE</button>
      </form>

      </div>
    </div>
  );
  
  // function handleSubmit(e) {
  //   e.preventDefault();

  //   axios.post('/addjob', { position, company, username: currentUser.username }).then(({ data }) => {
  //     if (data.error) {
  //       console.log('add job error');
  //     } else {
  //       toggleAppModal(false);
  //       setPosition('');
  //       setCompany('');
  //       setApps(data);
  //     }
  //   });
  // }

}

// onSubmit={handleSubmit}
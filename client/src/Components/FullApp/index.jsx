import React from 'react';

import AppStage from '../AppStage';
import './fullapp.scss';

export default function FullApp({ fullView, id, stage }) {
  return (
    <div className={fullView ? 'app-expanded' : 'app-expanded-hidden'}>
      <div className="app-status-list">
        <AppStage id={id} stage={stage} />
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
}
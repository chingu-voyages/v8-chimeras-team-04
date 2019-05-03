import React from 'react';

import AppStage from '../AppStage';
import './FullApp.scss';

export default function FullApp({ fullView, id, stage }) {
  return (
    <div className={fullView ? 'app-expanded' : 'app-expanded-hidden'}>
      <div className="app-status-list">
        <AppStage id={id} stage={stage} />
      </div>

      <div className="app-notes">
        <h3 className="app-notes-title">notes:</h3>
        
        <p className="app-notes-content">
          placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder
        </p>

      <form>
              <textarea
                
                name="app-notes"
                placeholder="Application Notes ..."
                className="form-notes-before"
                value="xyz"
                
              />
            <button type="submit" >SAVE</button>
      </form>

      </div>
    </div>
  );
}
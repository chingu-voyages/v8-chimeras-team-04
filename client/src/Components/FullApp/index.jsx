import React from 'react';

import AppStage from '../AppStage';
import './fullapp.scss';

export default function FullApp({ fullView, id, stage, notes }) {
  return (
    <div className={fullView ? 'app-expanded' : 'app-expanded-hidden'}>
      <div className="app-status-list">
        <AppStage id={id} stage={stage} />
      </div>

      <div className="app-notes">
        <h3 className="app-notes-title">notes:</h3>

        <p className="app-notes-content">{notes}</p>
      </div>
    </div>
  );
}

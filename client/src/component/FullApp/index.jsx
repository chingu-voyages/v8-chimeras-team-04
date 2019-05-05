import React from 'react';
import './FullApp.scss';

import AppStage from '../AppStage';

export default function FullApp({ fullView, id, stage, notes, dates }) {
  return (
    <div className={fullView ? 'app-expanded' : 'app-expanded-hidden'}>
      <div className="app-status-list">
        <AppStage id={id} stage={stage} />
      </div>

      <div className="app-notes">
        <div>
          <h3 className="app-notes-title">notes:</h3>
          <p className="app-notes-content">{notes}</p>
        </div>

        {dates && <div className="dates">Updated on: {dates.slice(0, 10)}</div>}
      </div>
    </div>
  );
}

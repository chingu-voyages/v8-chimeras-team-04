import React from 'react';

export default function Stage({ name, stageState, toggle }) {
  return (
    <div>
      <li onClick={() => toggle(!stageState)} className="stage">
        <div className={stageState ? 'circle stage-complete' : 'circle stage-incomplete'} />
        <span className="status-stage"> {name} </span>
      </li>
    </div>
  );
}

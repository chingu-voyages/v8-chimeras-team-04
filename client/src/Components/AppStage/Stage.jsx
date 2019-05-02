import React from 'react';

export default function Stage({ name, handleStage, status }) {
  return (
    <div>
      <li onClick={() => handleStage(name)} className="stage">
        <div className={status ? 'circle stage-complete' : 'circle stage-incomplete'} />
        <span className="status-stage"> {name} </span>
      </li>
    </div>
  );
}

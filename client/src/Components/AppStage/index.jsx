import React, { useState } from 'react';

import Stage from './Stage.jsx';
import './appstage.scss';

export default function AppStage() {
  const [submit, toggleSubmit] = useState(true);
  const [code, toggleCode] = useState(false);
  const [screen, toggleScreen] = useState(false);
  const [ivw1, toggleIvw1] = useState(false);
  const [ivw2, toggleIvw2] = useState(false);
  const [offer, toggleOffer] = useState(false);

  const stages = [
    { name: 'App Submitted', status: true, stageState: submit, toggle: toggleSubmit },
    { name: 'Code Challenge', status: false, stageState: code, toggle: toggleCode },
    { name: 'Screening', status: false, stageState: screen, toggle: toggleScreen },
    { name: 'Interview 1', status: false, stageState: ivw1, toggle: toggleIvw1 },
    { name: 'Interview 2', status: false, stageState: ivw2, toggle: toggleIvw2 },
    { name: 'Offer', status: false, stageState: offer, toggle: toggleOffer },
  ];

  return (
    <ul>
      {stages.map(stage => (
        <Stage name={stage.name} status={stage.status} toggle={stage.toggle} stageState={stage.stageState} />
      ))}
    </ul>
  );
}

import React, { useContext } from 'react';
import axios from 'axios';

import Stage from './Stage.jsx';
import AppContext from '../../context/AppContext';

import './AppStages.scss';

export default function AppStage({ id, stage }) {
  const { setApps } = useContext(AppContext);
  const stages = [
    { name: 'App Submitted', status: stage === 'submitted' },
    { name: 'Code Challenge', status: stage === 'challenge' },
    { name: 'Phone Interview', status: stage === 'phone' },
    { name: 'Onsite', status: stage === 'onsite' },
    { name: 'Offer', status: stage === 'offer' },
  ];

  return (
    <ul>
      {stages.map(stage => {
        const { name, status } = stage;

        return <Stage key={name} name={name} status={status} handleStage={handleStage} />;
      })}
    </ul>
  );

  function handleStage(name) {
    axios.post('/stage', { id, name }).then(({ data }) => {
      setApps(data);
    });
  }
}

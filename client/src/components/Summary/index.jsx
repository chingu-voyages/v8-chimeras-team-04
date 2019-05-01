import React, { useContext } from 'react';

import './Summary.scss';
import codeImg from '../../img/dev_activity.svg';
import FullAppContext from '../../context/FullAppContext';

export default function Summary() {
  const { apps } = useContext(FullAppContext);

  const submitted = apps.length;
  const challenges = apps.filter(el => el.stage === 'challenge').length;
  const phones = apps.filter(el => el.stage === 'phone').length;
  const onsites = apps.filter(el => el.stage === 'onsite').length;
  const offers = apps.filter(el => el.stage === 'offer').length;

  return (
    <div className="summary-container">
      <h1 className="summary-title">Summary</h1>
      <div className="summary-content">
        <div>
          <p className="summary-stats">Submitted: {submitted}</p>
          <p className="summary-stats">Code Challenges: {challenges}</p>
          <p className="summary-stats">Phone Interviews: {phones}</p>
          <p className="summary-stats">Onsites: {onsites}</p>
          <p className="summary-stats">Offers: {offers}</p>
        </div>
        <div className="dev-img-container">
          <img src={codeImg} className="dev-img" alt="dev img" />
        </div>
      </div>
    </div>
  );
}

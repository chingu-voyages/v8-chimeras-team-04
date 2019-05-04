import React, { useContext } from 'react';

import './Summary.scss';
import codeImg from '../../img/dev_activity.svg';
import FullAppContext from '../../context/FullAppContext';

export default function Summary(props) {
  const { apps } = useContext(FullAppContext);

  const submitted = apps.length;
  const challenges = apps.filter(el => el.stage === 'challenge').length;
  const phones = apps.filter(el => el.stage === 'phone').length;
  const onsites = apps.filter(el => el.stage === 'onsite').length;
  const offers = apps.filter(el => el.stage === 'offer').length;

  return (
    <div className={props.mobileView}>
      <div className="summary">
        <h1>Summary</h1>
        <div className="summary-stats">
          <div className="summary-row">
            <p className="summary-title">Submitted</p>
            <p className="summary-count">{submitted}</p>
            <p className="summary-percentage" />
          </div>

          <div className="summary-row">
            <p className="summary-title">Code Challenges</p>
            <p className="summary-count">{challenges}</p>
            <p className="summary-percentage">{Math.floor((challenges / submitted) * 100)}%</p>
          </div>
          <div className="summary-row">
            <p className="summary-title">Phone Interviews</p>
            <p className="summary-count">{phones}</p>
            <p className="summary-percentage">{Math.floor((phones / submitted) * 100)}%</p>
          </div>
          <div className="summary-row">
            <p className="summary-title">Onsites</p>
            <p className="summary-count">{onsites}</p>
            <p className="summary-percentage">{Math.floor((onsites / submitted) * 100)}%</p>
          </div>
          <div className="summary-row">
            <p className="summary-title">Offers</p>
            <p className="summary-count">{offers}</p>
            <p className="summary-percentage">{Math.floor((offers / submitted) * 100)}%</p>
          </div>
        </div>
      </div>
      <div className='dev-img-container'>
        <img src={codeImg} className="dev-img" alt="dev img" />
      </div>
    </div>
  );
}

import React, { useState } from 'react';

import './AppStage.scss';

export default function AppStage() {

    const [submit, toggleSubmit] = useState(true);
    const [code, toggleCode] = useState(false);
    const [screen, toggleScreen] = useState(false);
    const [interview1, toggleInterview1] = useState(false);
    const [interview2, toggleInterview2] = useState(false);
    const [offer, toggleOffer] = useState(false);

    return (
        <ul>
            <li onClick={() => toggleSubmit(!submit)} className="stage">
                <div className={submit ? "circle stage-complete" : "circle stage-incomplete"}></div>
                <span className="status-stage"> App Submitted </span>
            </li>
            <li onClick={() => toggleCode(!code)} className="stage">
                <div className={code ? "circle stage-complete" : "circle stage-incomplete"}></div>
                <span className="status-stage"> Code Challenge </span>
            </li>
            <li onClick={() => toggleScreen(!screen)} className="stage">
                <div className={screen ? "circle stage-complete" : "circle stage-incomplete"}></div>
                <span className="status-stage"> Screening </span>
            </li>
            <li onClick={() => toggleInterview1(!interview1)} className="stage">
                <div className={interview1 ? "circle stage-complete" : "circle stage-incomplete"}></div>
                <span className="status-stage"> Interview 1 </span>
            </li>
            <li onClick={() => toggleInterview2(!interview2)} className="stage">
                <div className={interview2 ? "circle stage-complete" : "circle stage-incomplete"}></div>
                <span className="status-stage"> Interview 2 </span>
            </li>
            <li onClick={() => toggleOffer(!offer)} className="stage">
                <div className={offer ? "circle stage-complete" : "circle stage-incomplete"}></div>
                <span className="status-stage"> Offer </span>
            </li>
        </ul>

            )
        }

        // <li onClick={() => toggleOffer(!offer)} className="stage">
        //         <div className={offer ? "circle stage-complete" : "circle stage-incomplete"}></div>    
        //         <input type="checkbox" name="offer" id="offer" defaultChecked={offer} />
        //         <label for="offer" className="status-stage"> Offer </label>
        //     </li>
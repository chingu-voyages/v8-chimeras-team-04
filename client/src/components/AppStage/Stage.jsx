import React, { useState } from 'react';

import './AppStage.scss';

export default function Stage(props) {

    return (
        <div>
            <li onClick={() => props.toggle(!props.stageState)} className="stage">
                <div className={props.stageState ? "circle stage-complete" : "circle stage-incomplete"}></div>
                <span className="status-stage"> {props.name} </span>
            </li>
        </div>
            )
        }
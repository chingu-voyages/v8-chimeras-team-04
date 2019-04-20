import React, { useState } from 'react';

import './AppStage.scss';

//for each application, want to monitor completion of that phase
//state reflects which stages have been completed




export default function AppStage() {

    const stages = [
        { name: 'Submitted', checked: true },
        { name: 'Code Challenge', checked: false },
        { name: 'Screening', checked: false },
        { name: 'Interview 1', checked: false },
        { name: 'Interview 2+', checked: false },
        { name: 'Offer', checked: false },
    ]

    const [check, toggleCheck] = useState(stages.checked);

    return (
        
        <div className="app-status-list">
            <ul>
                {stages.map((stage, check) =>
                    <li key={stage.name} onClick={(check) => toggleCheck(!stage.checked)}>
                        <div className={stage.checked ? "circle stage-complete" : "circle stage"}></div>
                        <span className="status-stage"> {stage.name} </span>
                    </li>
                )}
            </ul>
        </div>
    )

}


// <input 
//                                 type="checkbox" 
//                                 checked={status.checked} 
//                                 onClick={() => toggleCheck(!check)}>
//                             </input>
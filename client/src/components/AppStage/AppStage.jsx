import React, { useState } from 'react';


//for each application, want to monitor completion of that phase
//state reflects which stages have been completed




export default function AppStage() {

    const stage = [
        { name: 'Submitted', checked: true },
        { name: 'Code Challenge', checked: false },
        { name: 'Screening', checked: false },
        { name: 'Interview 1', checked: false },
        { name: 'Interview 2+', checked: false },
        { name: 'Offer', checked: false },
    ]

    const [check, toggleCheck] = useState();

    return (

        <div>
            <form className="app-status-list">
                    {stage.map((status) =>
                        <div>
                            <input 
                                type="checkbox" 
                                checked={status.checked} 
                                onClick={() => toggleCheck(!check)}>
                            </input>
                            <label> {status.name} </label>
                        </div>
                    )};
            </form>
        </div>
    )

}
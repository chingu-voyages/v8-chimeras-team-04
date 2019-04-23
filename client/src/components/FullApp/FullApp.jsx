import React, { useState } from 'react';

import AppStage from '../AppStage/AppStage.jsx';

import './FullApp.scss';


export default function FullApp(props) {

    return (
        <div className={props.fullView ?  "app-expanded" : "app-expanded-hidden" } >
            <div className="app-status-list">
                <AppStage />
            </div>

            <div className="app-notes">
                <h3 className="app-notes-title">notes:</h3>
                <p className="app-notes-content">This is where the notes would go if we decided to include this in our app.  Doesn't it look nice?</p>
            </div>
        </div>
    )
}

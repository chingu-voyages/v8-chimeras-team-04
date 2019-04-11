import React, { useState } from 'react';

import './FullApp.scss';


export default function FullApp() {

    return (
        <div className="app-expanded">
            <ul className="app-status-list">
                <li>Submitted</li>
                <li>Code Challenge</li>
                <li>Screening Interview</li>
                <li>Interview 1</li>
                <li>Interview 2</li>
                <li>Received Offer</li>
            </ul>
            <div className="app-notes">
                <h3 className="app-notes-title">Notes</h3>
                <p className="app-notes-content">This is where the notes would go if we decided to include this in our app.  Doesn't it look nice?</p>
            </div>
        </div>
    )
}
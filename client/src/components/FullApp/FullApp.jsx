import React, { useState } from 'react';

import './FullApp.scss';

export default function FullApp() {

    return (
        <div>
            <ul className="app-status-list">
                <li>Submitted</li>
                <li>Code Challenge</li>
                <li>Screening Interview</li>
                <li>Interview 1</li>
                <li>Interview 2</li>
                <li>Received Offer</li>
            </ul>
            <div>
                <h2>Notes</h2>
            </div>
        </div>
    )
}
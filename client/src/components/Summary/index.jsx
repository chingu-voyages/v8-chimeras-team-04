import React, { useState } from 'react';

import './summary.scss';
import codeImg from '../../img/dev_activity.svg';

export default function Summary() {

    return (
        <div className="summary-container">
            <h1 className="summary-title">Summary</h1>
            <div className="summary-content">
                <div>
                    <p>stats will go here</p>
                </div>
                <div className='dev-img-container'>
                    <img src={codeImg} className="dev-img" alt="dev img"></img>
                </div>
            </div>
        </div>
    )
}
import React, { useState } from 'react';

import './Summary.scss';
import codeImg from '../img/dev_activity.svg';

export default function Summary() {

    return (
        <div className="summary-container">
            <h1 className="summary-title">Summary</h1>
            <div className="summary-content">
                <div>
                    <p>stats will go here</p>
                </div>
                <div className='dev-img-container'>
                    <img src={codeImg} className="dev-img"></img>
                </div>
            </div>
        </div>
    )
}
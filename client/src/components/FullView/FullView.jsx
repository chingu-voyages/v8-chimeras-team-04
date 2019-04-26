import React, { useState, useEffect } from 'react';

import AppList from '../AppList/AppList.jsx';
import Summary from '../Summary/Summary.jsx';

import './FullView.scss';


export default function FullView() {
    return (
        <div className="app-full-view">
            <Summary />    
            <AppList />
        </div>
    )
}
import React from 'react';

import AppList from '../AppList';
import Summary from '../Summary';

import './FullView.scss';


export default function FullView() {
    return (
        <div className="app-full-view">
        <div className="summary-btn-mobile"><i className="far fa-chart-bar"/>Stats</div>
        <div className="apps-btn-mobile"><i className="fas fa-copy"/>Apps</div>  
            <Summary />    
            <AppList />
            
        </div>
    )
}
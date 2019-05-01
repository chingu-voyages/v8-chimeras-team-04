import React from 'react';

import AppList from '../AppList';
import Summary from '../Summary';

import './fullview.scss';


export default function FullView() {
    return (
        <div className="app-full-view">
            <Summary />    
            <AppList />
        </div>
    )
}
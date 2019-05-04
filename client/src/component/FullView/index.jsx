import React, { useState }  from 'react';

import AppList from '../AppList';
import Summary from '../Summary';

import './FullView.scss';


export default function FullView() {
    const [visible, setVisible] = useState("summary-container");
    
    return (
        <div className="app-full-view">
        <div className="summary-btn-mobile" 
            onClick={()=> setVisible("summary-container show-sum")}>
            <i className="far fa-chart-bar"/>Stats</div>
        <div className="apps-btn-mobile"
            onClick={()=> setVisible("summary-container hide-sum")}>
            <i className="far fa-copy"/>Apps</div>  
            <Summary mobileView={visible}/>    
            <AppList />
        </div>
    )
}

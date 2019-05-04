import React, { useState }  from 'react';

import AppList from '../AppList';
import Summary from '../Summary';

import './FullView.scss';


export default function FullView() {
    const [visible, setVisible] = useState("summary-container");
    
    return (
        <div className="app-full-view">
        <div className="summary-btn-mobile" 
            onClick={()=> setVisible("summary-container show-sum")}    
        ><i className="far fa-chart-bar"/>Stats</div>
        <div className="apps-btn-mobile"
        onClick={()=> setVisible("summary-container hide-sum")}  
        ><i className="fas fa-copy"/>Apps</div>  
            <Summary mobileView={visible}/>    
            <AppList />
        </div>
    )
}

//stats
// onClick={()=> (window.innerWidth <= 575) ? "show-summ" : "hide-summ")}

//if window width<575px , want to set summary to block and z-index 10 -- view summary

//if window width<575px, set summary to display none

// console.log(window.innerWidth)
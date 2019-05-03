import React, { useState, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import './EditableName.scss';

export default function  EditableName(props) {



    const [editable, setEditable ] = useState(false);
    const [ value, setValue ] = useState(props.value);

    return (
        <>
            {editable ? (
                <form onSubmit={(e)=>{ handleFormSubmit(e)}} className={props.classValue==="position" ? "editable__form position":"editable__form"}>
                    <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
                </form>               
            ) : (
                <h2 
                    className={props.classValue}
                    onClick={()=> setEditable(true)}
                >{value}</h2>
            )}
        </>
    )

    function handleFormSubmit(e) {
        e.preventDefault();
        if (value!=='') {
            props.handleNameChange(value, props.classValue)
        } else {
            setValue(props.value);
        }
        setEditable(false);
    }
} 

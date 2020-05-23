import React from 'react';
import './style.css';
import Timeline from '../Timeline';

const OurProgress = () => {
    return(
        <>
        <br/>
        <div className="container">
            <p className="has-text-centered" id="progress">Our Progress</p>
            <div className="container" id="timeline">
                <Timeline/>
            </div>
        </div>
        
        </>
    );
}

export default OurProgress;
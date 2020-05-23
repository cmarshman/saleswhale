import React from 'react';
import './style.css';
import TimeLine1 from '../../images/timeLine.png';
import Timeline2 from '../../images/timeLineTablet.png';
import Timeline3 from '../../images/timeLineMobile.png';




const Timeline = () => {
    return (
    <>
        <div>
            <img src={TimeLine1} alt="timeLine" id="timeLine1"/>
        </div>
        <div>
            <img src={Timeline2} alt="timeLineTablet" id="timeLine2"/>
        </div>
        <div>
            <img src={Timeline3} alt="timeLineMobile" id="timeLine3"/>
        </div>
    </>
    );
}

export default Timeline
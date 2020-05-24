import React from 'react';
import './style.css';
import Anime from '../../images/anime_pic2.png'

const OurOffices = () => {
    return (
        <>
        <div className="container">
            <p className="has-text-centered" id="culture">Our Offices</p>
        </div>
        <div id='mainBackground'>
            <div className="tile is-ancestor columns">
            <div className="tile is-vertical column is-two-fifths banana box" id="tile1">
                <img src={Anime} alt='anime character' id='animePic2'/>
                <p className='officeCity'>Singapore</p>
                <p className="officeAddress">115B Telok Ayer Street</p>
                <p className="officeAddress">Singapore, 068611</p>
            </div>
            <div className="tile is-vertical column is-two-fifths banana box" id="tile2">
                <img src={Anime} alt='anime character' id='animePic2'/>
                <p className='officeCity'>Washington DC</p>
                <p className="officeAddress">1701 Rhode Island Ave NW</p>
                <p className="officeAddress">Washington, DC 20036</p>
            </div>
            </div>
        </div>
        </>
    );
}

export default OurOffices;

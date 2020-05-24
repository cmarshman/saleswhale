import React from 'react';
import './style.css';
import Y from '../../images/yc-logo.png';
import MHV from '../../images/MHV-logo.png';
import Strive from '../../images/STRIVE_logo.png';
import WaveMaker from '../../images/wavemaker.png';

const OurInvestors = () => {
    return (
        <>
            <div id="mainbackground2">
                <div className="container">
                    <p className="has-text-centered " id="investors">Our Investors</p>
                    <div className="tile is-ancestor columns">
                        <div className="tile is-vertical column is-two-fifths banana box" id="tile3">
                        <a href="https://www.ycombinator.com/" id="external-link" target="_blank" rel="noopener noreferrer">
                            <img src={Y} alt='Y combinator'id='ycombinator'/>
                        </a>
                        
                        </div>
                        <div className="tile is-vertical column is-two-fifths banana box" id="tile4">
                        <a href="https://www.monkshill.com/" id="external-link" target="_blank" rel="noopener noreferrer">
                            <img src={MHV} alt='MHV'id='mhv'/>
                        </a>
                        </div>
                    </div>
                    <div className="tile is-ancestor columns">
                        <div className="tile is-vertical column is-two-fifths banana box" id="tile5">
                        <a href="https://strive.vc/en/" id="external-link" target="_blank" rel="noopener noreferrer">
                            <img src={Strive} alt='Strive'id='strive'/>
                        </a>
                        </div>
                        <div className="tile is-vertical column is-two-fifths banana box" id="tile6">
                        <a href="https://wavemaker.vc/" id="external-link" target="_blank" rel="noopener noreferrer">
                            <img src={WaveMaker} alt='Wavemaker'id='wavemaker'/>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurInvestors;
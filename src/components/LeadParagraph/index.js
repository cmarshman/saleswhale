import React from 'react';
import './style.css';

const LeadParagraph = () => {
    return (
        <>
            <div className="tile columns is-10 is-mobile" id="tile">
                <div className="column is-two-fifths">
                    <p className="title">A future where AI and humans work hand in hand</p>
                </div>
                <div className="column is-three-fifths columns">
                    {/* <div className="column is-one-fifth"></div> */}
                    <div className="column is-full" id="main-info">
                    <p id='paragraph1'>At Saleswhale, we believe that the future of work is Collaborative Intelligence - where machines and AI help humans fulfil their highest potential by automating drudgery and producing for more effective results.</p>
                    <br/>
                    <p id='paragraph1'>AI assistants help to automate repetitive and mundane tasks so that us humans focus on creative, high-impact work that creates value and inspires. The result? Happier and more productive teams doing meaningful work.</p>
                    <br/>
                    <p id='paragraph1'>Our mission is to put an AI assistant in every company that could greatly benefit from it, and we're starting off strong addressing this need in marketing and sales teams all across the world.</p>
                    <br/>
                    <p id='paragraph1'>The future is where AI and humans work hand in hand, and we’re here to help businesses benefit from that.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeadParagraph;
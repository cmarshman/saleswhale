import React from 'react';
import './style.css';
import Anime from '../../images/anime_pic.png'

const OurCulture = () => {
    return (
        <>
            <div className="container">
                <p className="has-text-centered" id="culture">Our Culture</p>
                <p className="has-text-centered is-centered" id="description">At Saleswhale, we encourage everyone to grow and innovate, while having fun in the process. </p>
                <div className="tile columns is-centered is-10" id="change">
                    <div className="column is-one-third">
                        <img src={Anime} alt='anime character' id="animePic"/>
                        <p id="subtitle">Building for the future</p>
                        <p id="describe">We always challenge the status quo and work hard innovating on a product that not only works, but changes the game for our users. </p>
                    </div>
                    <div className="column is-one-third">
                        <img src={Anime} alt='anime character' id="animePic"/>
                        <p id="subtitle">Promoting trust & transparency</p>
                        <p id="describe">We remain completely open, honest and transparent with everyone. This has allowed us to build strong relationships with each other.</p>
                    </div>
                    <div className="column is-one-third">
                        <img src={Anime} alt='anime character' id="animePic"/>
                        <p id="subtitle">Achieving our very best</p>
                        <p id="describe">We believe the success of the company lies within our employees and we constantly challenge each other to learn and level up.</p>
                    </div>
                </div>
                <p className="has-text-centered" id="talk">If you are excited by our vision of the future, and want to solve meaningful problems, talk to us!</p>
                <div className="columns" id="centerBtn">
                    <a className="button is-primary" href="*" id="btn">
                        Join the team
                    </a>
                </div>
            </div>
        </>
    )
}

export default OurCulture
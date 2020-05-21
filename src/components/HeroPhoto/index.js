import React from 'react';
import desktopView from '../../images/hero.jpg'
import tabletView from '../../images/hero-img.jpg'
import mobileView from '../../images/mobileView.png'
import './style.css';

const HeroPhoto = () => {
    return (
        <>
            <div className='columns'>
                <div className='column is-four-fifths' id='hero-photo1'>
                    <img src={desktopView} alt='hero' />
                </div>
            </div>
            <div className='columns'>
                <div className='column is-four-fifths' id='hero-photo2'>
                    <img src={tabletView} alt='hero' className='is-clearfix'/>
                </div>
            </div>
            <div className='columns'>
                <div className='column is-four-fifths' id='hero-photo3'>
                    <img src={mobileView} alt='hero' />
                </div>
            </div>

        </>
    );
}

export default HeroPhoto;
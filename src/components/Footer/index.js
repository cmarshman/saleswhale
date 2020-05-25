import React from 'react';
import './style.css';
import FooterImage from '../../images/foot.png';
import Facebook from '../../images/facebook.png';
import Twitter from '../../images/twitter.png';
import LinkedIn from '../../images/linkedIn.png';

const Footer = () => {
    return(
        <>
        <div id="blueCow">
            <a href="https://www.saleswhale.com/privacy" id="external-links" target="_blank" rel="noopener noreferrer"><p id="privacy">Privacy</p></a>
            <a href="https://www.saleswhale.com/terms" id="external-links" target="_blank" rel="noopener noreferrer"><p id="terms">Terms</p></a>
            <a href="https://www.linkedin.com/company/saleswhale/" id="external-links" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt='Facebook' id="facebook"/>
            </a>
            
            <a href="https://twitter.com/saleswhaleio" id="external-links" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt='Twitter' id="twitter"/>
            </a>
            <a href="https://twitter.com/saleswhaleio" id="external-links" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt='LinkedIn' id="linkedin"/>
            </a>
            <p id="copywrite">© 2020 Saleswhale, Inc. All rights reserved.</p>
        <img src={FooterImage} alt="footerImage" id="footerImage"/>
        </div>
        </>
    );
}

export default Footer;
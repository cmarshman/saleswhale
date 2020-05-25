import React from 'react';
import './style.css';
import FooterImage from '../../images/foot.png';
import Facebook from '../../images/facebook.png';
import Twitter from '../../images/twitter.png';
import LinkedIn from '../../images/linkedIn.png';

const Footer = () => {
    return (
        <>
            <div id="blueCow">
                <div className="container">
                    <div className="tile is-ancestor columns">
                        <div className="column is-one-third">
                            <a href="https://www.saleswhale.com/privacy" id="external-links" target="_blank" rel="noopener noreferrer"><p id="privacy">Privacy</p></a>
                        </div>
                        <div className="column is-one-third">
                            <a href="https://www.saleswhale.com/terms" id="external-links" target="_blank" rel="noopener noreferrer"><p id="terms">Terms</p></a>
                        </div>
                        <div className="column is-one-third" id="social">
                            <a href="https://www.linkedin.com/company/saleswhale/" id="external-links" target="_blank" rel="noopener noreferrer">
                                <img src={Facebook} alt='Facebook' id="facebook" />
                            </a>
                            <a href="https://twitter.com/saleswhaleio" id="external-links" target="_blank" rel="noopener noreferrer">
                                <img src={Twitter} alt='Twitter' id="twitter" />
                            </a>
                            <a href="https://twitter.com/saleswhaleio" id="external-links" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedIn} alt='LinkedIn' id="linkedin" />
                            </a>
                        </div>

                    </div>
                    <p id="copywrite">© 2020 Saleswhale, Inc. All rights reserved.</p>
                </div>
                <img src={FooterImage} alt="footerImage" id="footerImage" />
            </div>
        </>
    );
}

export default Footer;
import React from 'react';
import './style.css';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Logo from '../../images/sw-logo.svg'

const SiteMap = () => {

    return (
        <>
        <div id="footerH">
            <div className="container" id="play">
                <div className="tile is-ancestor columns">
                    <div className="column is-one-fifth" id="column1">
                        <Link to='/'  href="*" id="logo">
                            <img src={Logo} alt='logo' id="logoPic"/>
                        </Link>
                    </div>
                    <div className="column is-one-fifth" id="column2">
                        <p className="siteTitle">Why Saleswhale</p>
                        <a href="*" className="siteLinks" target="_blank" rel="noopener noreferrer">
                            <p>Collaborative Intelligence</p>
                        </a>
                        <a href="*" className="siteLinks" target="_blank" rel="noopener noreferrer">
                            <p>AI Assistant Capabilities</p>
                        </a>
                        <a href="*" className="siteLinks" target="_blank" rel="noopener noreferrer">
                            <p>Customer Stories</p>
                        </a>
                        <a href="*" className="siteLinks" target="_blank" rel="noopener noreferrer">
                            <p>Use Case - Technology</p>
                        </a>
                        <a href="*" className="siteLinks" target="_blank" rel="noopener noreferrer">
                            <p>Use Case - Education</p>
                        </a>
                        <a href="*" className="siteLinks" target="_blank" rel="noopener noreferrer">
                            <p>Use Case - Events</p>
                        </a>
                    </div>
                    <div className="column is-one-fifth" id="column3">
                        <p className="siteTitle">Product</p>
                        <a href="*" className="siteLinks" target="_blank" rel="noopener noreferrer">
                            <p>AI Conversations</p>
                        </a>
                        <a href="*" className="siteLinks" target="_blank" rel="noopener noreferrer">
                            <p>Lead Enrichment</p>
                        </a>
                        <a href="*" className="siteLinks" target="_blank" rel="noopener noreferrer">
                            <p>Deal Intelligence</p>
                        </a>
                        <a href="*" className="siteLinks" target="_blank" rel="noopener noreferrer">
                            <p>Workflow Integration</p>
                        </a>
                    </div>
                    <div className="column is-one-fifth" id="column4">
                        <p className="siteTitle">Company</p>
                        <a href="*" className="siteLinks" target="_blank" rel="noopener noreferrer">
                            <p>About us</p>
                        </a>
                        <a href="*" className="siteLinks" target="_blank" rel="noopener noreferrer">
                            <p>Blog</p>
                        </a>
                        <a href="*" className="siteLinks" target="_blank" rel="noopener noreferrer">
                            <p>Resources</p>
                        </a>
                        <a href="*" className="siteLinks" target="_blank" rel="noopener noreferrer">
                            <p>Careers</p>
                        </a>
                        <a href="*" className="siteLinks" target="_blank" rel="noopener noreferrer">
                            <p>Help Centre</p>
                        </a>
                    </div>
                    <div className="column is-one-fifth" id="column5">
                        <p className="siteTitle" id="contacts">Contact</p>
                        <a href="mailto: hello@saleswhale.com" className="siteLinks">hello@saleswhale.com</a>
                        <br/>
                        <a href="https://goo.gl/maps/VHAU8KiXom655a5Q7" className="siteTitle">US Office</a>
                        <p className="siteLinks">1701 Rhode Island Ave NW Washington, DC 20036</p>
                        <a href="https://goo.gl/maps/mTjrrjfn3X9s33ej7" className="siteTitle">Singapore Office</a>
                        <p className="siteLinks">155B Telok Ayer Street Singapore, O68611</p>
                    </div>
                </div>  
            </div>
            <Footer />
            </div>
        </>
    );
}

export default SiteMap;
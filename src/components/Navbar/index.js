import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/sw-logo.svg';


const Navbar = () => {
    
    return(
        <>
        <nav className="navbar" role="navigation" aria-label="main navigation" id="nav">
        <div className="navbar-brand">
            <Link to='/' className="navbar-item" href="*" id="logo">
                <img src={Logo} width="186" height="32" alt='logo'/>
            </Link>
        </div>

        <div id="navbarBasicExample" className="navbar-menu" >
            <div className="navbar-start" id="menu">
                <a href="https://www.saleswhale.com/about" className="navbar-item menuText" target="_blank" rel="noopener noreferrer">
                    Why Saleswhale?
                </a>
                <a href="https://www.saleswhale.com/platform" className="navbar-item menuText" target="_blank" rel="noopener noreferrer">
                    Product
                </a>
                <a href="https://www.saleswhale.com/" className="navbar-item menuText" target="_blank" rel="noopener noreferrer">
                    Company
                </a>
            </div>
        </div>

        <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                    <a href="https://app.saleswhale.com/login" className="button is-primary" id="loginBtn" target="_blank" rel="noopener noreferrer">
                        Log In
                    </a>
                    <a href="https://www.saleswhale.com/get-a-free-demo?ref=topNav" className="button is-light" id="demoBtn" target="_blank" rel="noopener noreferrer">
                        Get a Demo
                    </a>
                </div>
            </div>
        </div>
    </nav>
    </>
    )
}

export default Navbar;
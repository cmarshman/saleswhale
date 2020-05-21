import React from 'react';
import './style.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../images/sw-logo.svg';


const Navbar = () => {

    const location = useLocation();
    
    return(
        <>
        <nav className="navbar" role="navigation" aria-label="main navigation" id="nav">
        <div className="navbar-brand">
            <Link to='/' className="navbar-item" href="*" id="logo">
                <img src={Logo} width="112" height="28" alt='logo'/>
            </Link>
        </div>

        <div id="navbarBasicExample" className="navbar-menu" >
            <div className="navbar-start" id="menu">
                <Link to='/why'className={location.pathname === '/why' ? "navbar-item is-active menuText": "navbar-item menuText"}>
                    Why Saleswhale?
                </Link>
                <Link to='/product'className={location.pathname === '/product' ? "navbar-item is-active menuText": "navbar-item menuText"}>
                    Product
                </Link>
                <Link to='company' className={location.pathname === '/company' ? "navbar-item is-active menuText": "navbar-item menuText"}>
                    Company
                </Link>
            </div>
        </div>

        <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                    <Link to='/login' className="button is-primary" id="loginBtn">
                        Log In
                    </Link>
                    <Link to='/demo' className="button is-light" id="demoBtn">
                        Get a Demo
                    </Link>
                </div>
            </div>
        </div>
    </nav>
    </>
    )
}

export default Navbar;
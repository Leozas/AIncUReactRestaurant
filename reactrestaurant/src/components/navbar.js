/*
nav bar with [home][menu][directions]
*/

import React from 'react';


function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-light sticky-top justify-content-center">
            <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
                <span className="navbar-toggler-icon text-white">...</span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#carouselExampleCaptions">Peytra's Paellas</a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#pills-specials-tab">Specials</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#pills-breakfast-tab">Breakfast</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#pills-lunch-tab">Lunch</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#pills-dinner-tab">Dinner</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#pills-bar-tab">Bar</a>
                        </div>
                    </li>
                    <li className="nav-item border"> <a className="nav-link" href="#footer">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

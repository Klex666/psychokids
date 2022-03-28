import React from 'react';

import Logo from '../../img/header__logo.png'
import './header.sass'

const Header = () => {
    return (
        <>
        <div className="header">
            <div className="container">
                <ul className="nav">
                    <li className="nav__items"><a href="">HOME</a></li>
                    <li className="nav__items"><a href="">CATALOG</a></li>
                    <li className="nav__items"><a href="">ABOUT US</a></li>
                </ul>
                <div className="nav__logo">
                    <a href=""><img src={Logo} alt="" className="logo_img"/></a>
                </div>
            </div>
        </div>
        </>
    );
};

export default Header;
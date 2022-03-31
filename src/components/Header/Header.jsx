import React from 'react';

import Logo from '../../img/header__logo.png'
import './header.sass'

import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <div className="header">
            <div className="container">
                <ul className="nav">
                    <li className="nav__items"><NavLink 
                    to='/' 
                    className={({ isActive }) =>
                    isActive ? 'nav__active' : undefined
                    }
                     >HOME</NavLink></li>
                    <li className="nav__items"><NavLink 
                    to='/catalog'
                    className={({ isActive }) =>
                    isActive ? 'nav__active' : undefined
                    }
                    >CATALOG</NavLink></li>
                    <li className="nav__items"><NavLink 
                    to='/about'
                    className={({ isActive }) =>
                    isActive ? 'nav__active' : undefined
                    }
                    >ABOUT US</NavLink></li>
                </ul>
                <div className="nav__logo">
                    <Link to='/'><img src={Logo} alt="" className="logo_img"/></Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default Header;
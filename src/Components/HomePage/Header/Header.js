import React from 'react';
import HeaderMain from './HeaderMain/HeaderMain';
import NavBar from './NavBar/NavBar';
import './Header.css'
const Header = () => {
    return (
        <header className="Header-Header">
            <NavBar></NavBar>
            <HeaderMain></HeaderMain>
        </header>
    );
};

export default Header;
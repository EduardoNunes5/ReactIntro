import React from 'react';
import './Header.css';
import Navigation from './Navigation'

function Header(){
    return (
        <header className="app-header">
            <h1>
                First App Logo
            </h1>

            <Navigation />
        </header>
    )
}


export default Header;

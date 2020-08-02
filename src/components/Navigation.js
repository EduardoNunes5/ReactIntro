import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import './Navigation.css';
import Menu from './Menu';

function Navigation(){
    const [showMenu, setShowMenu] = useState(false);


    return (
        <nav>
            <FontAwesomeIcon
                icon={faBars}
                onClick = { ()=> setShowMenu(!showMenu)}
            />
        {
            showMenu &&
            <div className="MenuMask"></div>
        }

        {
            showMenu &&
            <Menu closeMenu={()=>setShowMenu(false)} />
        }
        </nav>
    )
}


export default Navigation;

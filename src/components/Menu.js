import React from 'react';
import { Link } from 'react-router-dom';

function Menu(props){
    return (
        <div className="Menu">
            <span className="Bold BorderBottom">Menu</span>
            <ul>
                <li>
                    <Link to="/" onClick={props.closeMenu}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" onClick={props.closeMenu}>
                        About
                    </Link>
                </li>
            </ul>
        </div>
    );

}

export default Menu;

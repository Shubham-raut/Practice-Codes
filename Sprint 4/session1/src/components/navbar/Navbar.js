import React from 'react';
import { Link } from 'react-router-dom';

let Navbar = () => {
    return (
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/restaurants'>Restaurants</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
            <li>
                <Link to='/projects'>Projects</Link>
            </li>
            <li>
                <Link to='/users'>Users</Link>
            </li>
        </ul>
    )
}

export default Navbar;
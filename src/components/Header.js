import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className='navbar'>
        <Link className='nav-item' to="/">Pokédex</Link>
        <Link className='nav-item' to="/about">About</Link>
    </nav>
)
export default Header; 

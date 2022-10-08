import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
        <div>
        <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid d-flex justify-content-between">
            <h4 className='text-white'>Sun-Shop</h4>
            <div className="navbar-nav ">
            <Link className="nav-link text-white" to='/'>Home</Link>
            <Link className="nav-link text-white" to='orders'>Orders</Link>
            <Link className="nav-link text-white" to='grandpa'>Grandpa</Link>
            <Link className="nav-link text-white" to='about'>About</Link>
            </div>
        </div>
        </nav>
          
        </div>
    );
};

export default Header;
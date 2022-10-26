import React from 'react';
import { NavLink } from 'react-router-dom';
import CartBlock from '../CartBlock/CartBlock';
import "./header.css";

function Header() {
  return (
    <header className='header'>
        <div className='wrapper'>
            <NavLink to="/" className="header-store-title">Game Sore</NavLink>

        </div>
        <div className='wrapper header-cart'>
            <CartBlock />
        </div>
    </header>
  )
}

export default Header
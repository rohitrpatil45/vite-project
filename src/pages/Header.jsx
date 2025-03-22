import React from 'react';
import { Link } from 'react-router-dom';  // Make sure this line is included!

function Header() {
  return (
    <>
      <header className='navbar-container'>
        <h2>Rohit Patil</h2>
        <nav className='nav-links'>
          <Link to="/contact">Contact</Link> | 
          <Link to="/portfolio">Portfolio</Link>  {/* Fixed spelling mistake */}
        </nav>
      </header>
    </>
  );
}

export default Header;

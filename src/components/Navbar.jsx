import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className='header'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </header>
  );
}

export default Navbar;

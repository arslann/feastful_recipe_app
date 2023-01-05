import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="feastful__navbar">
      <ul className="feastful__navbar-container">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Dessert</a>
        </li>
        <li>
          <a href="/">Lunch</a>
        </li>
        <li>
          {' '}
          <a href="/">Main Dishes</a>
        </li>
        <li>
          <a href="/">Side Dishes</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

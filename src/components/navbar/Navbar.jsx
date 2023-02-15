import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="feastful__navbar">
      <ul className="feastful__navbar-container">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/recipes">Dessert</a>
        </li>
        <li>
          <a href="/recipes">Lunch</a>
        </li>
        <li>
          {' '}
          <a href="/recipes">Main Dishes</a>
        </li>
        <li>
          <a href="/recipes">Side Dishes</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FoodContext from '../../context/FoodContext';
import './navbar.css';

function Navbar() {
  const { setCategory } = useContext(FoodContext);

  return (
    <nav className="feastful__navbar">
      <ul className="feastful__navbar-container">
        <li>
          <Link to="/" className="nav_link">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/recipes"
            className="nav_link"
            onClick={() => setCategory('dessert')}
          >
            Dessert
          </Link>
        </li>
        <li>
          <Link
            to="/recipes"
            className="nav_link"
            onClick={() => setCategory('breakfast')}
          >
            Breakfast
          </Link>
        </li>
        <li>
          {' '}
          <Link
            to="/recipes"
            className="nav_link"
            onClick={() => setCategory('main course')}
          >
            Main Dishes
          </Link>
        </li>
        <li>
          <Link
            to="/recipes"
            className="nav_link"
            onClick={() => setCategory('side dish')}
          >
            Side Dishes
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import './footer.css';
import React, { useContext } from 'react';
import FoodContext from '../../context/FoodContext';
import { Link } from 'react-router-dom';

function Footer() {
  const { setCategory } = useContext(FoodContext);
  return (
    <div className="feastful__footer">
      <div className="feastfull__footer-container">
        <div className="feastfull__footer-container-categories">
          <h3 className="feastfull__footer-container-categories-title">
            Recipe Categories
          </h3>
          <ul className="feastfull__footer-container-categories-list">
            <li>
              <Link
                className="footerLink"
                to="/recipes"
                onClick={() => setCategory('Appetizer')}
              >
                Appetizer
              </Link>
            </li>
            <li>
              <Link
                className="footerLink"
                to="/recipes"
                onClick={() => setCategory('beverage')}
              >
                Beverages
              </Link>
            </li>

            <li>
              <Link
                className="footerLink"
                to="/recipes"
                onClick={() => setCategory('dessert')}
              >
                Dessert
              </Link>
            </li>

            <li>
              <Link
                className="footerLink"
                to="/recipes"
                onClick={() => setCategory('breakfast')}
              >
                Lunch
              </Link>
            </li>

            <li>
              <Link
                className="footerLink"
                to="/recipes"
                onClick={() => setCategory('main course')}
              >
                Main dishes
              </Link>
            </li>

            <li>
              <Link
                className="footerLink"
                to="/recipes"
                onClick={() => setCategory('side dish')}
              >
                Side Dishes
              </Link>
            </li>
          </ul>
        </div>
        <div className="feastfull__footer-container-desserts"></div>
      </div>
    </div>
  );
}

export default Footer;

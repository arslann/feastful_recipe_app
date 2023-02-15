import './footer.css';
import React from 'react';

function Footer() {
  return (
    <div className="feastful__footer">
      <div className="feastfull__footer-container">
        <div className="feastfull__footer-container-categories">
          <h3 className="feastfull__footer-container-categories-title">
            Recipe Categories
          </h3>
          <ul className="feastfull__footer-container-categories-list">
            <li>Appetizer</li>
            <li>Beverages</li>
            <li>Dessert</li>
            <li>Lunch</li>
            <li>Main dishes</li>
            <li>Side Dishes</li>
          </ul>
        </div>
        <div className="feastfull__footer-container-desserts"></div>
      </div>
    </div>
  );
}

export default Footer;

import React from 'react';
import './header.css';
import Navbar from '../../components/navbar/Navbar';

function Header() {
  const isFullWidth = window.location.pathname === '/';
  return (
    <>
      <div
        className={`feastful__header-container ${
          !isFullWidth ? 'feastful__header-container_md' : ''
        }`}
      >
        <div className="feastful__header-container_logo">
          <div className="feastful__header-container_logo_container">
            <a href="/">Feastful</a>
          </div>
        </div>
        <div
          className={`feastful__header-container_title ${
            !isFullWidth ? 'hide' : ''
          }`}
        >
          <h1 className="text-focus-in">Enjoy Cooking</h1>
          <div className="feastful__header-container_title-text fade-in-bottom">
            <p>Browse through over 5.000</p>
            <p> delicious recipes!</p>
          </div>
        </div>
        <div
          className={`feastful__header-container_button fade-in-bottom fade-in ${
            !isFullWidth ? 'hide' : ''
          }`}
        >
          <button>Browse</button>
        </div>
        <Navbar />
      </div>
    </>
  );
}

export default Header;

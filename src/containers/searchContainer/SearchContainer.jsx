import React from 'react';
import './searchContainer.css';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Recipe } from '../../components';
function SearchContainer() {
  return (
    <div className="feastful__searchcontainer">
      <div className="feastful__searchcontainer-links">
        <div className="feastful__searchcontainer-url">
          <p>
            <AiFillHome className="icon" /> / Recipes
          </p>
        </div>
        <div className="feastful__searchcontainer-title">
          <h1>Dessert</h1>
        </div>
        <div className="feastful__searchcontainer-buttons">
          <Link to="/" className="btn">
            Lunch
          </Link>
          <Link to="/" className="btn">
            Appetizer
          </Link>
          <Link to="/" className="btn">
            Dessert
          </Link>
          <Link to="/" className="btn">
            Main Dishes
          </Link>
          <Link to="/" className="btn">
            Side Dishes
          </Link>
        </div>
      </div>

      <div className="feastful__searchcontainer_container">
        <div className="feastful__searchcontainer_container-recipes">
          <Recipe size="M" />
          <Recipe size="M" />
          <Recipe size="M" />
          <Recipe size="M" />
          <Recipe size="M" />
          <Recipe size="M" />
          <Recipe size="M" />
          <Recipe size="M" />
        </div>
      </div>

      <div className="feastful__searchcontainer-pageNumbers">
        <ul className="feastful__searchcontainer-pageNumbers-list">
          <li>
            <button className="feastful__searchcontainer-pageNumbers-list-num">
              1
            </button>
          </li>
          <li>
            <button className="feastful__searchcontainer-pageNumbers-list-num">
              2
            </button>
          </li>
          <li>
            <button className="feastful__searchcontainer-pageNumbers-list-num">
              3
            </button>
          </li>
          <li>
            <button className="feastful__searchcontainer-pageNumbers-list-num">
              4
            </button>
          </li>
          <li>
            <button className="feastful__searchcontainer-pageNumbers-list-num">
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchContainer;

import React, { useContext, useEffect, useState } from 'react';
import './searchContainer.css';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Recipe } from '../../components';
import FoodContext from '../../context/FoodContext';

function SearchContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const { recipes, category, setCategory, setOffset, offset } =
    useContext(FoodContext);

  // set max page numbers for pagination
  useEffect(() => {
    setMaxPage(recipes.totalResults);
  }, [recipes]);

  // console.log(maxPage);

  if (!recipes || !recipes.results) return <h1>Loading...</h1>;

  return (
    <div className="feastful__searchcontainer" id="searchcontainer">
      <div className="feastful__searchcontainer-links">
        <div className="feastful__searchcontainer-url">
          <p>
            <AiFillHome className="icon" /> / Recipes
          </p>
        </div>
        <div className="feastful__searchcontainer-title">
          <h1>{category}</h1>
        </div>
        <div className="feastful__searchcontainer-buttons">
          <Link
            to="/recipes"
            className="btn"
            onClick={() => setCategory('breakfast')}
          >
            Breakfast
          </Link>
          <Link
            to="/recipes"
            className="btn"
            onClick={() => setCategory('appetizer')}
          >
            Appetizer
          </Link>
          <Link
            to="/recipes"
            className="btn"
            onClick={() => setCategory('dessert')}
          >
            Dessert
          </Link>
          <Link
            to="/recipes"
            className="btn"
            onClick={() => setCategory('main course')}
          >
            Main Dishes
          </Link>
          <Link
            to="/recipes"
            className="btn"
            onClick={() => setCategory('side dish')}
          >
            Side Dishes
          </Link>
          <Link
            to="/recipes"
            className="btn"
            onClick={() => setCategory('salad')}
          >
            salad
          </Link>
          <Link
            to="/recipes"
            className="btn"
            onClick={() => setCategory('beverage')}
          >
            beverage
          </Link>
        </div>
      </div>

      <div className="feastful__searchcontainer_container">
        <div className="feastful__searchcontainer_container-recipes">
          {recipes.results &&
            recipes.results.map((recipe, id) => {
              return (
                <Recipe
                  id={recipe.id}
                  image={recipe.image}
                  title={recipe.title}
                  cookingminutes={recipe.readyInMinutes}
                  key={recipe.id}
                  size="M"
                />
              );
            })}
        </div>
      </div>

      <div className="feastful__searchcontainer-pageNumbers">
        <ul className="feastful__searchcontainer-pageNumbers-list">
          <li>
            {currentPage > 1 && (
              <a
                type="button"
                href="#searchcontainer"
                className="feastful__searchcontainer-pageNumbers-list-num"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                {currentPage > 1 && currentPage - 1}
              </a>
            )}
          </li>
          <li>
            <button
              className="feastful__searchcontainer-pageNumbers-list-num selected"
              onClick={() => setCurrentPage(currentPage)}
            >
              {currentPage}
            </button>
          </li>
          <li>
            {currentPage + 1 < maxPage && (
              <a
                type="button"
                href="#searchcontainer"
                className="feastful__searchcontainer-pageNumbers-list-num"
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                  setOffset(offset + 1);
                }}
              >
                {currentPage + 1}
              </a>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchContainer;

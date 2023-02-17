import React, { useContext } from 'react';
import './searchContainer.css';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Recipe } from '../../components';
import FoodContext from '../../context/FoodContext';

function SearchContainer() {
  const { recipes, setCategory } = useContext(FoodContext);

  console.log(recipes);

  if (!recipes || !recipes.results) return <h1>Loading...</h1>;

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
          {recipes.results.map((recipe, id) => {
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

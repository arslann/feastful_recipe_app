import './recipeInfo.css';
import React, { useContext, useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';

import { useParams } from 'react-router-dom';
import FoodContext from '../../context/FoodContext';
import img from '../../assets/tempImg.jpg';

function RecipeInfo() {
  const { recipeId } = useParams();
  const { recipe, setRecipeId } = useContext(FoodContext);

  useEffect(() => {
    setRecipeId(recipeId);
  }, [recipeId]);

  console.log(recipe);

  if (!recipe || recipe.id != recipeId) return <h1>Loading...</h1>;

  return (
    <div className="feastful__recipeinfo">
      <div className="feastful__recipeinfo-header">
        <div className="feastful__recipeinfo-url">
          <p>
            <AiFillHome className="icon" /> / Recipes / {recipe.title}
          </p>
        </div>
        <div className="feastful__recipeinfo-title">
          <h1>{recipe.title}</h1>
        </div>
        <div className="feastful__recipeinfo-info">
          <AiOutlineClockCircle className="feastful__recipe-texts-time-icon" />
          <span className="feastful__recipeinfo-info-time">
            <strong> {recipe.readyInMinutes} min</strong>
          </span>

          <span className="feastful__recipeinfo-info-prep">
            Prep: <strong>{recipe.preparationMinutes} min.</strong>
          </span>
          <span className="feastful__recipeinfo-info-cook">
            Cook: <strong>{recipe.cookingMinutes} min.</strong>
          </span>
          <span className="feastful__recipeinfo-info-servings">
            Servings: <strong>{recipe.servings} servings</strong>
          </span>
        </div>
      </div>

      <div className="feastful__recipeinfo-content">
        <div className="feastful__recipeinfo-image">
          <img src={recipe.image} alt="" />
        </div>

        <div className="feastful__recipeinfo-ingredients">
          <h3 className="feastful__recipeinfo-ingredients-title">
            Ingredients
          </h3>

          <ul className="feastful__recipeinfo-ingredients-list">
            {recipe.extendedIngredients.map((el, id) => {
              return (
                <li key={id}>
                  <strong>{el.amount + ' ' + el.unit}</strong> {el.nameClean}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="feastful__recipeinfo-directions">
          <h3 className="feastful__recipeinfo-directions-title">Directions</h3>
          <ol className="feastful__recipeinfo-directions-list">
            {recipe.analyzedInstructions[0].steps.map((el, id) => {
              return <li key={id}>{el.step}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeInfo;

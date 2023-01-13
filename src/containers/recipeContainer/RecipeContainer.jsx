import './recipecontainer.css';
import React from 'react';
import Recipe from '../../components/recipe/Recipe';

function RecipeContainer() {
  return (
    <>
      <div className="feastful__recipecontainer">
        <Recipe></Recipe>
        <Recipe isReverse="true"></Recipe>
        <Recipe></Recipe>
        <Recipe isReverse="true"></Recipe>
        <Recipe></Recipe>
      </div>
    </>
  );
}

export default RecipeContainer;

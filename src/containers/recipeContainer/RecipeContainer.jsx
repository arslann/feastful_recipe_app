import './recipecontainer.css';
import React, { useContext } from 'react';
import Recipe from '../../components/recipe/Recipe';
import FoodContext from '../../context/FoodContext';

function RecipeContainer() {
  const { randomRecipes } = useContext(FoodContext);

  if (!randomRecipes) return <h1>Loading...</h1>;

  return (
    <>
      <div className="feastful__recipecontainer">
        {randomRecipes.recipes &&
          randomRecipes.recipes.map((recipe, id) => {
            let isReverse = false;
            if (id % 2 === 1) isReverse = true;

            return (
              <Recipe
                id={recipe.id}
                image={recipe.image}
                title={recipe.title}
                description={recipe.summary}
                isReverse={isReverse}
                cookingminutes={recipe.readyInMinutes}
                key={recipe.id}
              />
            );
          })}
      </div>
    </>
  );
}

export default RecipeContainer;

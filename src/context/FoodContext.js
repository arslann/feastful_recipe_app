import { createContext, useState, useEffect } from 'react';

const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [category, setCategory] = useState(null);
  const [recipes, setRecipes] = useState(null);
  const [randomRecipes, setrandomRecipes] = useState(null);
  const [recipeId, setRecipeId] = useState(null);
  const [recipe, setRecipe] = useState({});
  const [offset, setOffset] = useState(0);

  const apiKey = '4992e3a278164c4cbbb0fefbaf9f3b32';

  const fetchRandomRecipes = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=5`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setrandomRecipes(result))
      .catch((error) => console.log('error', error));
  };

  const fetchRecipesByCategory = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?number=6&type=${category}&offset=${offset}&apiKey=${apiKey}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setRecipes(result))
      .catch((error) => console.log('error', error));
  };

  const fetchRecipe = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setRecipe(result))
      .catch((error) => console.log('error', error));
  };

  // fetch random recipes
  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  // fetch recipes by category
  useEffect(() => {
    if (!category) return;

    fetchRecipesByCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, offset]);

  // fetch recipe by id
  useEffect(() => {
    if (!recipeId) return;

    fetchRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeId]);

  // console.log(recipes);
  return (
    <FoodContext.Provider
      value={{
        recipe,
        recipes,
        setCategory,
        setRecipeId,
        category,
        offset,
        setOffset,
        randomRecipes,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContext;

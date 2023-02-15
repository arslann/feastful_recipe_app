import { createContext, useState, useEffect, useCallback } from 'react';

const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [category, setCategory] = useState('');
  const [recipes, setRecipes] = useState();

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
      .then((result) => setRecipes(result))
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  console.log(recipes);
  return (
    <FoodContext.Provider
      value={{
        recipes,
        setCategory,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContext;

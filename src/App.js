import { SearchBar, Recipe, Carousel, Footer } from './components';
import { Header, RecipeContainer } from './containers';
import './App.css';
import { Outlet } from 'react-router-dom';
import { FoodProvider } from './context/FoodContext';

function App() {
  return (
    <FoodProvider>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </FoodProvider>
  );
}

export default App;

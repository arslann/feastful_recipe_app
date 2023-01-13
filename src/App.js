import { SearchBar, Recipe, Carousel, Footer } from './components';
import { Header, RecipeContainer } from './containers';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;

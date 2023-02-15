import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { RecipeContainer, SearchContainer } from './containers';
import { RecipeInfo } from './components';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<RecipeContainer />} />

        <Route path="/recipes">
          <Route index={true} element={<SearchContainer />} />
          <Route index={false} path=":recipeId" element={<RecipeInfo />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

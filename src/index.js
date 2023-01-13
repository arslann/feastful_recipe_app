import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { RecipeContainer } from './containers';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<RecipeContainer />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

import React from 'react';
import img from '../../assets/tempImg.jpg';
import { AiOutlineClockCircle } from 'react-icons/ai';
import './recipe.css';

function Recipe({ isReverse = false }) {
  return (
    <div className={`feastful__recipe ${isReverse ? 'reversed' : ''}`}>
      <div className="feastful__recipe-image">
        <img src={img} alt="" />
      </div>
      <div className="feastful__recipe-texts">
        <div className="feastful__recipe-text-title">
          <a>Easy Sushi</a>
        </div>
        <div className="feastful__recipe-texts-time">
          <AiOutlineClockCircle className="feastful__recipe-texts-time-icon" />
          <span> 30 min</span>
        </div>
        <div className="feastful__recipe-texts-text">
          <p>
            Easily add-in a short description about your recipe! This can be of
            any length. Remember, you are trying to sell your recipe!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;

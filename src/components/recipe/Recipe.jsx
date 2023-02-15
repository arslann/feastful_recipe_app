import React from 'react';
import img from '../../assets/tempImg.jpg';
import { AiOutlineClockCircle } from 'react-icons/ai';
import './recipe.css';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

function Recipe({
  image,
  title,
  description,
  cookingminutes,
  isReverse = false,
  size = 'L',
}) {
  return (
    <div
      className={`feastful__recipe ${isReverse ? 'reversed' : ''} ${
        'recipeSize' + size
      }`}
    >
      <div className="feastful__recipe-image">
        <img src={image} alt="" />
      </div>
      <div className="feastful__recipe-texts">
        <div className="feastful__recipe-text-title">
          <Link className="title">{title}</Link>
        </div>
        <div className="feastful__recipe-texts-time">
          <AiOutlineClockCircle className="feastful__recipe-texts-time-icon" />
          <span> {cookingminutes} min</span>
        </div>
        <div className="feastful__recipe-texts-text">{parse(description)}</div>
      </div>
    </div>
  );
}

export default Recipe;

import './recipeInfo.css';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';
import img from '../../assets/tempImg.jpg';

function RecipeInfo() {
  return (
    <div className="feastful__recipeinfo">
      <div className="feastful__recipeinfo-header">
        <div className="feastful__recipeinfo-url">
          <p>
            <AiFillHome className="icon" /> / Recipes / Chocolate
          </p>
        </div>
        <div className="feastful__recipeinfo-title">
          <h1>Chocolate Coffee Kiss</h1>
        </div>
        <div className="feastful__recipeinfo-info">
          <AiOutlineClockCircle className="feastful__recipe-texts-time-icon" />
          <span className="feastful__recipeinfo-info-time">
            <strong> 30 min</strong>
          </span>

          <span className="feastful__recipeinfo-info-prep">
            Prep: <strong>10 min.</strong>
          </span>
          <span className="feastful__recipeinfo-info-cook">
            Cook: <strong>5 min.</strong>
          </span>
          <span className="feastful__recipeinfo-info-servings">
            Servings: <strong>2 servings</strong>
          </span>
        </div>
      </div>

      <div className="feastful__recipeinfo-content">
        <div className="feastful__recipeinfo-image">
          <img src={img} alt="" />
        </div>

        <div className="feastful__recipeinfo-ingredients">
          <h3 className="feastful__recipeinfo-ingredients-title">
            Ingredients
          </h3>

          <ul className="feastful__recipeinfo-ingredients-list">
            <li>
              <strong>60 ml</strong> extra virgin olive oil
            </li>
            <li>
              <strong>60 ml</strong> extra virgin olive oil
            </li>
            <li>
              <strong>60 ml</strong> extra virgin olive oil
            </li>
            <li>
              <strong>60 ml</strong> extra virgin olive oil
            </li>
            <li>
              <strong>60 ml</strong> extra virgin olive oil
            </li>
            <li>
              <strong>60 ml</strong> extra virgin olive oil
            </li>
          </ul>
        </div>

        <div className="feastful__recipeinfo-directions">
          <h3 className="feastful__recipeinfo-directions-title">Directions</h3>
          <ol className="feastful__recipeinfo-directions-list">
            <li>
              Adjust oven rack to lower-middle position, set large heatproof
              serving bowl on rack, and heat oven to 200 degrees.
            </li>
            <li>
              Bring 4 quarts water to rolling boil in large Dutch oven or
              stockpot
            </li>
            <li>
              While water is heating, heat oil in large skillet over medium heat
              until shimmering, but not smoking.
            </li>
            <li>
              Add bacon and cook, stirring occasionally, until lightly browned
              and crisp, about 8 minutes.
            </li>
            <li>Serve immediately</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeInfo;

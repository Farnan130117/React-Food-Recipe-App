import React from 'react';
import style from './recipe.module.css';





const Recipe = ({title, calories, image, ingredients}) => {
    return (
      <div className={style.card}>
       
       
        <img className={style.image} src={image} alt="" />
        <h1>{title}</h1>
        <ol>
          {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
        
        <p className={style.cardnumber}>Calories: {calories}</p>
        
      </div>
    );
  };
  
  
  export default Recipe;
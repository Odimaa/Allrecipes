import React from 'react';
import style from './recipe.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Recipe = ({ title, calories, image, ingredients, totalWeight }) => {

    return (
        <div className={style.recipe}>



            <h1 className="m-5">{title}</h1>
            <img src={image} className="rounded-circle" alt="" />

            <div className="info">
                <p>Calories: {calories} kcal</p>


                <p>Weight: {totalWeight} g</p>
            </div>
            <ol>
                <h4>Recipe</h4>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>


        </div>
    )
}

export default Recipe;
import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <div className={style.title}>
            <img className={style.image} src={image} alt="" />
            <h1 >{title}</h1>
            </div>
            <p>{calories} calories</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            
        </div>
    )
};

export default Recipe;
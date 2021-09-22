import React, { useEffect, useState } from "react";
import "./App.css"
import Recipe from "./Recipe";

export const App = () => {

  const APP_ID = "bfca593f";
  const APP_KEY = "c9fbd3bf5365992ab5e2850bc396bbbd";

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes();
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return (
    <div className="App">
      <form className="searchForm">
        <input className="searchBar" type="text" />
        <button className="searchButton" type="submit">Search</button>
        
      </form>
      {recipes.map(recipe => (
          <Recipe />
        ))}
    </div>
  )
  
}


export default App;

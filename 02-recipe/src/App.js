import React, { useEffect, useState } from "react";
import "./App.css"
import Recipe from "./Recipe";

export const App = () => {

  const APP_ID = "bfca593f";
  const APP_KEY = "c9fbd3bf5365992ab5e2850bc396bbbd";

  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("Fish");

  useEffect(() => {
    getRecipes();
  }, [query])

  

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);

  }
  const updateSearch = e => {
    setSearch(e.target.value);

  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="searchForm">
        <input className="searchBar" type="text" value={search} onChange={updateSearch} />
        <button  className="searchButton" type="submit">Search</button>
        
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      
    </div>
  )
  
}


export default App;

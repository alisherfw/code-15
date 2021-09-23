import React, { useEffect, useState } from 'react'
import News from './Components/News';
import "./App.css";


export const App = () => {

  const API_KEY = "21482a96bf804491ad0a56e6e4ed5327";

  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Samsung');

  useEffect(() => {
    getNews();
  }, [query])

  const getNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2021-09-23&sortBy=popularity&apiKey=${API_KEY}`);
    const data = await response.json();
    setNews(data.articles);
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
        <input className="searchBar" type="input" onChange={updateSearch} />
        <input className="searchButton" type="submit" />
      </form>
      <div className="news">
      {news.map(item => (
        <News 
          author={item.author}
          title={item.title}
          description={item.description}
          url={item.url}
          time={item.publishedAt}
          image={item.urlToImage}
        />
      ))}
      </div>
    </div>
  )
}

export default App;
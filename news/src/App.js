import React, { useEffect, useState } from 'react'
import News from './Components/News';



export const App = () => {

  const API_KEY = "21482a96bf804491ad0a56e6e4ed5327";

  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, [])

  const getNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=news&from=2021-09-23&sortBy=popularity&apiKey=${API_KEY}`);
    const data = await response.json();
    setNews(data.articles);
  }


  return (
    <div className="news">
      <form className="searchForm">
        <input className="searchBar" type="input" />
        <input className="searchButton" type="submit" />
      </form>

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
  )
}

export default App;
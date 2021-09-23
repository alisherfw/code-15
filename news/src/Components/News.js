import React from 'react'
import style from './News.module.css';
const News = ({author, title, description, url, time, image}) => {
    if(image === null) {
        image = "https://datahabitat.mx/wp-content/themes/wp-pro-real-estate-7-child/images/no-image.png";
    }
    return (
        
        <div className={style.news}>
            <img src={image} alt={title} width="300" height="200" className={style.image}/>
            <div>
                <a href={url}> <h1 className={style.title}>{title}</h1> </a>
                 <div className={style.details}>
                    <h5>Author: {author}  </h5>
                    {/* <h5>{time}</h5> */}
                </div>
            <p className={style.description}>{description} <a className="moreD" href={url}>More...</a></p>
            
            </div>
        </div>

    )
}

export default News;
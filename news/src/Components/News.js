import React from 'react'

const News = ({author, title, description, url, time, image}) => {
    if(image === null) {
        image = "https://datahabitat.mx/wp-content/themes/wp-pro-real-estate-7-child/images/no-image.png";
    }
    return (
        <div>
            <h1>{title}</h1>
            <div>
                <h5>Author: {author} </h5>
                <p>{time}</p>
            </div>
            <img src={image} alt={title} width="300" height="200"/>
            <p>{description}</p>
            <a href={url}>More...</a>
        </div>
    )
}

export default News;
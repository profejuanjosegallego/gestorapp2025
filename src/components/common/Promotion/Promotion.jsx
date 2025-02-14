import React from 'react'
import "./Promotion.css"

const Promotion = ({ object }) => {
    return (
        <div className='promotion-card'>
            <div className='promotion-card__image'>
                <img src={`src/assets/img/${object.image}`} alt={`Image of ${name} `} className='promotion-card__img' />
            </div>
            <div className='promotion-card__details'>
                <h2 className='promotion-card__tittle'>{object.name}</h2>
                <p className='promotion-card__description'>{object.description}</p>
            </div>
        </div>
    )
}

export default Promotion
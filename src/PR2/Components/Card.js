import React from 'react'
import './card.css'

const Card = (props) => {
  const { title, price,discountPercentage, description, rating, category, thumbnail } = props.data
  const discountedPrice = Math.round(price-((discountPercentage*price)/100))

  return (
    <div className='col-4 pb-2 col-xl-3'>
      <div className="card">
        <div className="card-img">
          <img src={thumbnail} alt="this is card" width={'100%'} />
          <span className='card-float'>{rating} <i className="ri-star-s-fill"></i></span>
        </div>
        <div>
          <h3>{title}</h3>
          <h5 className='text-light'>{category}</h5>
          <h4>₹{discountedPrice} <span className='original-price'>₹{price}</span> <span className='discount'>({Math.round(discountPercentage)}%  off)</span></h4>
          <p>{description}</p>
          <div className='btn'>
            <button><i className="ri-shopping-cart-2-fill"></i> Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

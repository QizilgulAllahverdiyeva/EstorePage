import React from 'react'
import man from '../../assets/images/latest-man.png'
import './style.css'
const LatestOffers = () => {
  return (
    <section className='latestOffers'>
    <img src={man} alt="" />
    <div>
    <h1>Get Our Latest Offers News </h1>
    <p>Subscribe news latter </p>
    </div>
    <input type="text" placeholder='Your email here' />
    <button>Shop Now</button>
    </section>
  )
}

export default LatestOffers
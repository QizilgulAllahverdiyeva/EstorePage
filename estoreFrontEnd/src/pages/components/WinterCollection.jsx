import React from 'react'
import HeroMan from '../../assets/images/hero_man.png'
import './style.css'
const WinterCollection = () => {
  return (
    <section className='winterCollection'>
    <img src={HeroMan} alt="" />
    <div className='winterCollectionDiv'>
      <p>60% discount</p>
      <h1>Winter Collection</h1>
      <p>Best cloth collection by Rose</p>
      <button>Shop Now</button>
    </div>
    </section>
  )
}

export default WinterCollection
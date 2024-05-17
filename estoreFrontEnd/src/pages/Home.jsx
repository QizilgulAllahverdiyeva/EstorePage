import React from 'react'
import LatestOffers from './components/LatestOffers'
import WinterCollection from './components/WinterCollection'
import ShopCategory from './components/ShopCategory'
import LatestProducts from './components/LatestProducts'

const Home = () => {
  return (
    <>
    <WinterCollection/>
    <ShopCategory/>
    <LatestProducts/>
    <LatestOffers/>
    </>
  )
}

export default Home
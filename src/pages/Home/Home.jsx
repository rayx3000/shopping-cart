import React from 'react'
import './Home.css'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-content'>
        <h1>Hello! Welcome To RayxShop {"(:"}!</h1>
        <p>Here you can find a variety of products to suit your needs. Browse through our collection and add items to your cart. Happy shopping!</p>
        <Link to='/shop'>
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
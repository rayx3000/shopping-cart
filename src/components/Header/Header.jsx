import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
        <h1>RayxShop</h1>
        <nav>
          <ul>
            <li><span><i class="fa-solid fa-house"></i></span><span>Home</span></li>
            <li><span><i class="fa-solid fa-shopping-bag"></i></span><span>Shop</span></li>
            <li><span><i class="fa-solid fa-shopping-cart"></i></span></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header
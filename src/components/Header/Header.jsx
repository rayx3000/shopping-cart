import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
        <h1>RayxShop</h1>
        <nav>
          <ul>
            <li>
              <Link className='nav-link' to="/">
                <span><i className="fa-solid fa-house"></i></span>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link className='nav-link' to="/shop">
                <span><i className="fa-solid fa-shopping-bag"></i></span>
                <span>Shop</span>
              </Link>
            </li>
            <li>
              <Link className='nav-link' to="/cart">
                <span><i className="fa-solid fa-shopping-cart"></i></span>
              </Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header
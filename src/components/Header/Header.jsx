import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({ cartItemCount = 0 }) => {
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
                {cartItemCount > 0 && (
                  <span className="cart-badge" style={{ marginLeft: '5px', backgroundColor: 'red', borderRadius: '50%', padding: '2px 6px', fontSize: '0.8rem', color: 'white' }}>{cartItemCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = ({ cart, removeFromCart, setCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is currently empty.</p>
          <Link to="/shop"><button style={{ marginTop: '10px' }}>Return to Shop</button></Link>
        </div>
      ) : (
        <div className="cart-container">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title}/>
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)} style={{ marginLeft: '15px', color: 'red' }}><i class="fa-solid fa-x"></i></button>
              </div>
            </div>
          ))}
          <div className="cart-summary" style={{ textAlign: 'right', marginTop: '20px' }}>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
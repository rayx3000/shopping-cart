import React, { useState, useEffect } from 'react'
import './Shopping.css'
import { getProducts } from '../../data/data'

const Shopping = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [quantities, setQuantities] = useState({})

  useEffect(() => {
    getProducts().then(data => {
      if (data) setProducts(data)
      setLoading(false)
    })
  }, [])

  const updateQuantity = (productId, newQuantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: newQuantity
    }))
  }

  return (
    <div className="shopping">
      <h2>Our Products</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="products-container">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className='product-image-container'>
                <img src={product.image} alt={product.title} width="150"/>
              </div>
              <div className='product-details'>
                <h3>{product.title}</h3>
                <h4 style={{ textTransform: 'capitalize' }}>{product.category}</h4>
                <p className="price">${product.price.toFixed(2)}</p>
                <div className='quantity-container'>
                  <button onClick={() => updateQuantity(product.id, Math.max(0, quantities[product.id] - 1))}>-</button>
                  <span>{quantities[product.id] || 1}</span>
                  <button onClick={() => updateQuantity(product.id, (quantities[product.id] || 1) + 1)}>+</button>
                </div>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Shopping
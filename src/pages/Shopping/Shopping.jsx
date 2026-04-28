import React, { useState, useEffect } from 'react'
import './Shopping.css'
import { getProducts } from '../../data/data'

const Shopping = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts().then(data => {
      if (data) setProducts(data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="shopping">
      <h2>Our Products</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="products-container">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} width="150" />
              <h3>{product.title}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Shopping
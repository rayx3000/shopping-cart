import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Shopping from "./pages/Shopping/Shopping"
import Cart from "./pages/Cart/Cart"

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return (
    <>
      <Header cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shopping addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} setCart={setCart} />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
    </>
  )
}

export default App

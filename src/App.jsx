import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Shopping from "./pages/Shopping/Shopping"
import Cart from "./pages/Cart/Cart"

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shopping />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
    </>
  )
}

export default App

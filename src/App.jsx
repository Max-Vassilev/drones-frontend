import React from "react"
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Logo from "./assets/Logo.png"
import { useCart } from "./context/CartContext"
import "./App.css"

export default function App() {
  const { totalItems } = useCart()

  return (
    <Router>
      <header>
        <div className="logo-container">
          <img src={Logo} alt="Drone Store Logo" className="logo" />
        </div>

        <nav>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
          <NavLink to="/" className="nav-link">Home</NavLink>

          <NavLink to="/cart" className="nav-link cart-link">
            <i className="fas fa-shopping-cart"></i>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <footer>
        &copy; 2025 Drone Store. All rights reserved.
      </footer>
    </Router>
  )
}

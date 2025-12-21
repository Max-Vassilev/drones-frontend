import React from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"

export default function ProductCard({ product }) {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-content">
        <h3>{product.name}</h3>
        <p className="product-details">{product.price}</p>
        <p>{product.description}</p>

        <div className="product-actions">
          <button
            className="product-button"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            View Product
          </button>

          <button
            className="product-button product-button-secondary"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

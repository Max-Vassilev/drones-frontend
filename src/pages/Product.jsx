import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCart } from "../context/CartContext"

export default function Product() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  if (!product) {
    return <div className="loading-text">Loading...</div>
  }

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.full_description}</p>
        <div className="product-buy-row">
          <p className="product-price">{product.price}</p>
          <button
            className="product-button"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

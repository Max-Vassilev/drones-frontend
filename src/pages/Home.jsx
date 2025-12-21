import React, { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

export default function Home() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetch("http://127.0.0.1:8080/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <h1>Discover the World from Above</h1>
          <p>Premium drones for creators, explorers, and professionals</p>
        </div>
      </section>

      {!products && <div className="loading-text">Loading...</div>}

      {products && (
        <div className="container">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  )
}

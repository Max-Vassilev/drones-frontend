import React, { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

export default function Home() {
  const [products, setProducts] = useState(null)
  const [page, setPage] = useState(1)
  const perPage = 6

  useEffect(() => {
    fetch("http://127.0.0.1:5001/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(() => setProducts([]))
  }, [])

  const totalPages = Math.max(1, Math.ceil((products?.length || 0) / perPage))
  const safePage = Math.min(page, totalPages)
  const start = (safePage - 1) * perPage
  const currentProducts = (products || []).slice(start, start + perPage)

  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <h1>Discover the World from Above</h1>
          <p>Premium drones for creators, explorers, and professionals</p>
        </div>
      </section>

      {products === null && <div className="loading-text">Loading...</div>}

      {products !== null && (
        <>
          <div className="container">
            {currentProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.length > 0 && (
            <div className="pagination">
              <button
                disabled={safePage === 1}
                onClick={() => setPage(p => p - 1)}
              >
                &lt;
              </button>

              <span>{safePage} / {totalPages}</span>

              <button
                disabled={safePage === totalPages}
                onClick={() => setPage(p => p + 1)}
              >
                &gt;
              </button>
            </div>
          )}
        </>
      )}
    </>
  )
}

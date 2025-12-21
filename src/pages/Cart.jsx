import React from "react"
import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

export default function Cart() {
  const { cart, increase, decrease } = useCart()
  const navigate = useNavigate()

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price.replace(/[^0-9.]/g, ""))
    return sum + price * item.quantity
  }, 0)

  if (cart.length === 0) {
    return <div className="loading-text">Your cart is empty</div>
  }

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "60px auto",
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        gap: "40px"
      }}
    >
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px 2fr 1fr 1fr",
            paddingBottom: "14px",
            borderBottom: "2px solid #ccc",
            fontWeight: "600"
          }}
        >
          <div>Product</div>
          <div>Name</div>
          <div>Price</div>
          <div>Quantity</div>
        </div>

        {cart.map(item => (
          <div
            key={item.id}
            style={{
              display: "grid",
              gridTemplateColumns: "120px 2fr 1fr 1fr",
              alignItems: "center",
              padding: "22px 0",
              borderBottom: "1px solid #e5e5e5"
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "80px", height: "80px", objectFit: "contain" }}
            />

            <div>{item.name}</div>
            <div>{item.price}</div>

            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <button className="product-button" onClick={() => decrease(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button className="product-button" onClick={() => increase(item.id)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          height: "fit-content",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
        }}
      >
        <h3>Order Summary</h3>

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
          <span>Items</span>
          <span>{cart.reduce((s, i) => s + i.quantity, 0)}</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "600", fontSize: "18px", marginBottom: "24px" }}>
          <span>Total</span>
          <span>€{total.toLocaleString()}</span>
        </div>

        <button
          className="product-button"
          style={{ width: "100%", padding: "14px", fontSize: "16px" }}
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

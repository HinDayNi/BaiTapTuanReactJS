"use client"

import { useSelector, useDispatch } from "react-redux"
import { addItem, removeItem, updateQuantity } from "../store/slices/cartSlice"

// Sample products data
const products = [
  { id: 1, name: "Laptop", price: 999, image: "💻" },
  { id: 2, name: "Smartphone", price: 699, image: "📱" },
  { id: 3, name: "Headphones", price: 199, image: "🎧" },
  { id: 4, name: "Camera", price: 499, image: "📷" },
]

function ShoppingCart() {
  const { items, total } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <div className="feature-container">
      <h2>📦 Giỏ hàng (Shopping Cart)</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div style={{ fontSize: "3rem", textAlign: "center" }}>{product.image}</div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => dispatch(addItem(product))}>Thêm vào giỏ</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Giỏ hàng của bạn</h3>

        {items.length === 0 ? (
          <p>Giỏ hàng trống</p>
        ) : (
          <>
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <div>
                  <span style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}>{item.image}</span>
                  <span>{item.name}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ marginRight: "1rem" }}>
                    <button
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                      style={{ padding: "0.25rem 0.5rem" }}
                    >
                      -
                    </button>
                    <span style={{ margin: "0 0.5rem" }}>{item.quantity}</span>
                    <button
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                      style={{ padding: "0.25rem 0.5rem" }}
                    >
                      +
                    </button>
                  </div>
                  <div style={{ minWidth: "80px", textAlign: "right" }}>${item.price * item.quantity}</div>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    style={{ backgroundColor: "#ef4444", marginLeft: "0.5rem" }}
                  >
                    Xóa
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-summary">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Tổng số lượng:</h3>
                <span>{items.reduce((sum, item) => sum + item.quantity, 0)} sản phẩm</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
                <h3>Tổng tiền:</h3>
                <span>${total}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ShoppingCart

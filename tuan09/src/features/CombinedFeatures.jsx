"use client"

import { useSelector, useDispatch } from "react-redux"
import { increment as counterIncrement } from "../store/slices/counterSlice"
import { addTodo } from "../store/slices/todoSlice"
import { toggleTheme } from "../store/slices/themeSlice"
import { addItem } from "../store/slices/cartSlice"
import { login, logout } from "../store/slices/authSlice"

function CombinedFeatures() {
  const count = useSelector((state) => state.counter.value)
  const todos = useSelector((state) => state.todos.todos)
  const theme = useSelector((state) => state.theme.theme)
  const cartItems = useSelector((state) => state.cart.items)
  const { user, isLoggedIn } = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const handleAddRandomTodo = () => {
    const randomTodos = ["Học Redux Toolkit", "Hoàn thành dự án", "Đọc tài liệu", "Tập thể dục", "Mua sắm cuối tuần"]
    const randomIndex = Math.floor(Math.random() * randomTodos.length)
    dispatch(addTodo(randomTodos[randomIndex]))
  }

  const handleAddRandomProduct = () => {
    const products = [
      { id: 1, name: "Laptop", price: 999, image: "💻" },
      { id: 2, name: "Smartphone", price: 699, image: "📱" },
      { id: 3, name: "Headphones", price: 199, image: "🎧" },
      { id: 4, name: "Camera", price: 499, image: "📷" },
    ]
    const randomIndex = Math.floor(Math.random() * products.length)
    dispatch(addItem(products[randomIndex]))
  }

  const handleToggleLogin = () => {
    if (isLoggedIn) {
      dispatch(logout())
    } else {
      dispatch(
        login({
          username: "user123",
          name: "Người dùng",
          email: "user@example.com",
        }),
      )
    }
  }

  return (
    <div className="feature-container">
      <h2>🔐 Kết hợp nhiều slice và store</h2>

      <div style={{ marginTop: "2rem" }}>
        <div
          style={{
            padding: "1.5rem",
            backgroundColor: "#f9fafb",
            borderRadius: "0.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <h3>Trạng thái từ nhiều slice</h3>

          <div style={{ marginTop: "1rem" }}>
            <p>
              <strong>Counter:</strong> {count}
            </p>
            <p>
              <strong>Todos:</strong> {todos.length} công việc
            </p>
            <p>
              <strong>Theme:</strong> {theme === "light" ? "Sáng" : "Tối"}
            </p>
            <p>
              <strong>Cart:</strong> {cartItems.length} sản phẩm
            </p>
            <p>
              <strong>Auth:</strong> {isLoggedIn ? `Đã đăng nhập (${user.name})` : "Chưa đăng nhập"}
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          <button onClick={() => dispatch(counterIncrement())}>Tăng Counter</button>

          <button onClick={handleAddRandomTodo}>Thêm Todo ngẫu nhiên</button>

          <button onClick={() => dispatch(toggleTheme())}>Đổi Theme</button>

          <button onClick={handleAddRandomProduct}>Thêm sản phẩm vào giỏ</button>

          <button onClick={handleToggleLogin} style={{ backgroundColor: isLoggedIn ? "#ef4444" : "#10b981" }}>
            {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CombinedFeatures

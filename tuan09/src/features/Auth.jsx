"use client"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { login, logout, setUserInfo } from "../store/slices/authSlice"

function Auth() {
  const { user, isLoggedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      setError("Vui lòng nhập tên đăng nhập và mật khẩu")
      return
    }

    // Simulate login (in a real app, this would call an API)
    dispatch(
      login({
        username,
        name: username, // Just using username as the name for this demo
        email: `${username}@example.com`,
      }),
    )

    setError("")
    setUsername("")
    setPassword("")
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  const handleUpdateProfile = () => {
    if (user) {
      dispatch(
        setUserInfo({
          name: `${user.name} (Updated)`,
          avatar: "👤",
        }),
      )
    }
  }

  return (
    <div className="feature-container">
      <h2>🎯 Quản lý user đăng nhập (Auth)</h2>

      {isLoggedIn ? (
        <div style={{ marginTop: "2rem" }}>
          <div
            style={{
              padding: "2rem",
              borderRadius: "0.5rem",
              backgroundColor: "#f0fdf4",
              marginBottom: "1.5rem",
            }}
          >
            <h3 style={{ marginBottom: "1rem" }}>
              Chào mừng, {user.name}! {user.avatar || ""}
            </h3>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>

          <div>
            <button onClick={handleUpdateProfile} style={{ marginRight: "1rem" }}>
              Cập nhật thông tin
            </button>
            <button onClick={handleLogout} style={{ backgroundColor: "#ef4444" }}>
              Đăng xuất
            </button>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: "2rem", maxWidth: "400px" }}>
          <div className="form-group">
            <label htmlFor="username">Tên đăng nhập</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập tên đăng nhập"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
            />
          </div>

          {error && <div style={{ color: "#ef4444", marginBottom: "1rem" }}>{error}</div>}

          <button onClick={handleLogin}>Đăng nhập</button>
        </div>
      )}
    </div>
  )
}

export default Auth
